/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";
import { logout, setUser } from "../features/Auth/authSlice";
import { RootState } from "../store";


const baseQuery = fetchBaseQuery({
    // baseUrl: 'https://the-pencil-palace.onrender.com/api',
    baseUrl: 'http://localhost:5000/api',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth?.token
        if (token) {
            headers.set('authorization', `${token}`)
        }
        return headers
    }
})

const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs,
    BaseQueryApi,
    DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 404) {
        toast.error((result.error.data as { message: string }).message);
    }
    if (result?.error?.status === 403) {
        toast.error((result.error.data as { message: string }).message);
    }
    if (result?.error?.status === 401) {

        console.log('Sending refresh token');

        const res = await fetch('http://localhost:5000/api/auth/refresh-token', {
            method: 'POST',
            credentials: 'include',
        });

        const data = await res.json();

        if (data?.data?.accessToken) {
            const user = (api.getState() as RootState).auth.user;

            if (user) {
                api.dispatch(
                    setUser({
                        user: user?.user,
                        token: data?.data?.accessToken,
                    })
                );
            }

            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout());
        }
    }

    return result;
};










const baseApi = createApi({
    baseQuery: baseQueryWithRefreshToken,
    tagTypes: ['Product', 'Order', "Cart"],
    endpoints: () => ({})
})


export default baseApi;

