import baseApi from "../../Api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: 'POST',
                body: userInfo,
                credentials: 'include'
            })
        }),

        register: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/register',
                method: 'POST',
                body: userInfo,
                credentials: 'include'
            })
        }),

        allUsers: builder.query({
            query: () => ({
                url: '/admin/users',
                method: 'GET',
                credentials: 'include'
            })

        }),
        updateUser: builder.mutation({
            query: ({ id, userInfo }) => ({
                url: `/admin/users/${id}`,
                method: 'PATCH',
                body: userInfo,
                credentials: 'include'
            })
        }),
        deleteUser: builder.mutation({
            query: ({ id, payload }) => ({
                url: `/admin/users/${id}`,
                method: 'PATCH',
                body: payload,
                credentials: 'include'
            })
        }),
        resetPassReq: builder.mutation({
            query: (payload) => ({
                url: `/auth/request-password-reset`,
                method: 'POST',
                body: payload,
                credentials: 'include'
            })
        }),
        resetPassword: builder.mutation({
            query: ({ token, payload }) => ({
                url: `/auth/reset-password?token=${token}`,
                method: "POST",
                body: payload,
                credentials: "include",
            }),
        }),
        changePassword: builder.mutation({
            query: (payload) => ({
                url: `/auth/change-password`,
                method: "POST",
                body: payload,
                credentials: "include",
            }),
        }),





    })
})
export const { useLoginMutation, useRegisterMutation, useAllUsersQuery, useUpdateUserMutation, useDeleteUserMutation, useResetPassReqMutation, useResetPasswordMutation, useChangePasswordMutation } = authApi
