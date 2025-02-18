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


        addToCart: builder.mutation({
            query: (cart) => ({

                url: "orders/carts",
                method: "POST",
                body: cart,
            }),
            invalidatesTags: ["Cart"],
        }),
        getCartItems: builder.query({
            query: (email) => ({
                url: `/orders/cart/${email}`,
                method: "GET",

            }),
            providesTags: ["Cart"],
        }),
        getOrder: builder.query({
            query: (orderId) => ({
                url: `/orders/${orderId}`,
                method: "GET",

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
        verifyOrder: builder.mutation({
            query: () => ({
                url: "/orders/payment/verify-payment",
                method: "GET",

            }),
            invalidatesTags: ["Order"],
        }),
        makePayment: builder.mutation({
            query: (payload) => ({
                url: "/orders/payment",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["Order"],
        }),
        removeFromCart: builder.mutation({
            query: (id) => ({
                url: `/orders/cart/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Cart"],
        }),

    })
})
export const { useGetOrdersQuery, useAddToCartMutation, useGetCartItemsQuery, useCreateOrderMutation, useRemoveFromCartMutation, useVerifyOrderMutation, useMakePaymentMutation, useGetOrderQuery } = orderApi;