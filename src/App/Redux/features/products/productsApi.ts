import baseApi from "../../Api/baseApi";

interface filterParams {
    name: string;
    value: string;
}

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (args) => {
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((i: filterParams) => {
                        if (Array.isArray(i.value)) {

                            params.append(i.name, i.value.join(","));
                        } else {
                            params.append(i.name, i.value);
                        }
                    });
                }

                return {
                    url: `/products?${params.toString()}`,
                    method: "GET",
                };
            },
            providesTags: ["Product"],
        }),
        getProductsForAdmin: builder.query({
            query: () => {
                return {
                    url: "/products/admin",
                    method: "GET",
                }
            },
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



    }),


});

export const { useGetProductsQuery, useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation, useGetProductByIdQuery, useGetProductsForAdminQuery } = productsApi;
