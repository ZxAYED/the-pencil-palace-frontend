import baseApi from "../../Api/baseApi";



const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
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
        getAllOrders: builder.query({
            query: () => ({
                url: "/orders",
                method: "GET",
            }),
            providesTags: ["Order"],
        }),
        getOrder: builder.query({
            query: (orderId) => ({
                url: `/orders/user/${orderId}`,
                method: "GET",

            }),
            providesTags: ["Order"],
        }),
        getOrderOfUser: builder.query({
            query: (email) => ({
                url: `/orders/dashboard/${email}`,
                method: "GET",

            }),
            providesTags: ["Order"],
        }),
        getSingleOrderOfUser: builder.query({
            query: (orderId) => ({
                url: `/orders/user/singleOrder/${orderId}`,
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
        removeOrder: builder.mutation({
            query: (id) => ({
                url: `/orders/order/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Cart"],
        }),
        generateRevenue: builder.query({
            query: () => ({
                url: "/orders/admin-revenue",
                method: "GET",

            }),

        }),
        verifyPayment: builder.query({
            query: (order_id) => ({
                url: "/orders/payment/verify-payment",
                method: "GET",
                params: { order_id }
            }),

        }),
    })
})
export const { useGetAllOrdersQuery, useAddToCartMutation, useGetCartItemsQuery, useCreateOrderMutation, useRemoveFromCartMutation, useVerifyPaymentQuery, useMakePaymentMutation, useGetOrderQuery, useGenerateRevenueQuery, useGetOrderOfUserQuery, useRemoveOrderMutation, useGetSingleOrderOfUserQuery } = orderApi;