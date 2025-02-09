import baseApi from "../../Api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: 'POST',
                body: userInfo
            })
        }),
        register: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/register',
                method: 'POST',
                body: userInfo
            })
        }),
        allUsers: builder.query({
            query: () => ({
                url: '/admin/users',
                method: 'GET',
            })
        }),
        updateUser: builder.mutation({
            query: ({ id, userInfo }) => ({
                url: `/admin/users/${id}`,
                method: 'PATCH',
                body: userInfo
            })
        })

    })
})
export const { useLoginMutation, useRegisterMutation, useAllUsersQuery, useUpdateUserMutation } = authApi
