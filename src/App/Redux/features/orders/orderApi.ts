import baseApi from "../../Api/baseApi";



const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getOrders: builder.query({
            query: (payload) => ({
                url: "/orders",
                method: "GET",
                params: payload,
            }),
            providesTags: ["Order"],
        }),


        createOrder: builder.mutation({
            query: (order) => ({

                url: "/orders",
                method: "POST",
                body: order,
            }),
            invalidatesTags: ["Order"],
        }),
        getCartItems: builder.query({
            query: (userEmail) => ({
                url: `/products/cart/${userEmail}`,
                method: "GET",
                credentials: "include"
            }),
            providesTags: ["Cart"],
        }),
    })
})
export const { useGetOrdersQuery, useCreateOrderMutation, useGetCartItemsQuery } = orderApi;