import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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

const baseApi = createApi({
    baseQuery: baseQuery,
    tagTypes: ['Product', 'Order', "Cart"],
    endpoints: () => ({})
})


export default baseApi;

