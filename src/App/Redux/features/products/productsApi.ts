import baseApi from "../../Api/baseApi";

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/products",
                method: "GET",
                credentials: "include"
            }),
            providesTags: ["Product"],
        }),

        createProduct: builder.mutation({
            query: (product) => ({
                url: "/products",
                method: "POST",
                body: product,


            }),
            invalidatesTags: ["Product"],
        }),
        getProductById: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: "GET",
                credentials: "include"
            }),
            providesTags: ["Product"],
        }),
        updateProduct: builder.mutation({
            query: ({ id, product }) => ({
                url: `/products/${id}`,
                method: "PATCH",
                body: product,

            }), invalidatesTags: ["Product"],
        }),
        deleteProduct: builder.mutation({
            query: ({ id, payload }) => ({
                url: `/products/${id}`,
                method: "PATCH",
                body: payload,

            }), invalidatesTags: ["Product"],
        }),
        addToCart: builder.mutation({
            query: (payload) => ({
                url: "/products/cart",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["Cart"],
        }),
        removeFromCart: builder.mutation({
            query: (id) => ({
                url: `/products/cart/${id}`,
                method: "DELETE",

            }),
            invalidatesTags: ["Cart"],
        }),


    }),


});

export const { useGetProductsQuery, useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation, useGetProductByIdQuery, useAddToCartMutation, useRemoveFromCartMutation } = productsApi;
