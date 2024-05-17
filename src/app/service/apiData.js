import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `/products`
        }),

        getProductById: builder.query({
            query: (id) => `/products/${id}`
        }),

        addNewProduct: builder.mutation({
            query: (newProduct) => ({
                url: `/products/add`,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: newProduct
            })
        }),

        updateProduct: builder.mutation({
            query: ({ id, updatedProduct }) => ({
                url: `/products/${id}`,
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: updatedProduct,
            })
        }),

        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            })
        })
    }),
})

export const { useGetAllProductsQuery, useGetProductByIdQuery, useAddNewProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productsApi# Random change 30837
# Random change 30376
# Random change 27746
# Random change 3536
# Random change 6817
# Random change 28748
# Random change 1683
# Random change 14392
