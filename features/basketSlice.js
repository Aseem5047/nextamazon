import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.cartItems = [...state.cartItems, action.payload]
        },
        removeFromBasket: (state, action) => {
            const newBasket = [...state.cartItems]
            const index = state.cartItems.findIndex((item) => item.id === action.payload)

            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(
                    `Can't remove product (id: ${action.payload.id}) as its not in basket`
                )
            }
            state.cartItems = newBasket;
            console.log(newBasket);
            console.log(state.cartItems);
        },
        setBasketEmpty: (state, action) => {
            state.cartItems = []
        }
    }
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, setBasketEmpty } = basketSlice.actions

export const selectBasketItems = (state) => state.basket.cartItems;
export const selectBasketItemsWithId = (state, id) => state.basket.cartItems.filter((item) => item.id === id);
export const selectBasketTotal = (state) => state?.basket?.cartItems?.reduce((total, item) => total += item?.price, 0);


export default basketSlice.reducer;