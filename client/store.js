import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./features/basketSlice"
import restaurantReducer from "./features/restaurantSlice"

export const store = configureStore({
    // combune all the slicer and ake them one
    reducer: {
        basket: basketReducer,
        restaurant: restaurantReducer,
    },
})