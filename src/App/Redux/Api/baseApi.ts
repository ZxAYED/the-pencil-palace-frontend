import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    credentials: 'include',

})
const baseApi = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({})
})


export default baseApi;

