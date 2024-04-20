import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from "@reduxjs/toolkit/query"
import { productsApi } from './service/apiData'

export const store = configureStore({
    reducer:{
        [productsApi.reducerPath]:productsApi.reducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch)# Random change 11485
# Random change 6714
# Random change 30173
# Random change 23024
# Random change 21984
# Random change 30213
# Random change 32318
# Random change 9416
