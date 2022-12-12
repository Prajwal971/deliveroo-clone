import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {
            // find if the items being removed is there ???
            const index = state.items.findIndex((item) => item.id === action.payload.id)
            //create copy 
            let newBasket = [...state.items]
            //modify the basket check if inde returened
            if (index >= 0) {
                newBasket.splice(index, 1)// cut the items
            } else {
                console.warn(`cant remove product (id:${action.payload.id} as ites not in basket)`)
            }
            //replace the existing basket with new basket
            state.items = newBasket
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

//Selector access the global single state and pull from here
export const selectBasketItems = (state) => state.basket.items;

// observer function based on ID 
// if id === the itemsid then only increment
// Or check the ID of pressed item --- check/filter it --- if itemsID of the pressed item are equal then only increment
export const selectBasketItemsWithId = (state, id) => state.basket.items.filter((item) => item.id === id);

export default basketSlice.reducer