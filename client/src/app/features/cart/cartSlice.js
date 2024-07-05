import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: [{title: 'demo'}],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem: (state, action) => { 

            let itemFound = false;
            state.items.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.quantity++;
                    console.log("lo ji lo item bi lo ", item.quantity);
                    itemFound = true;
                }
            });
            if (!itemFound) {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => { 
            state.items = state.items.filter(item => item.title!==action.payload.title);
        },

        updateQuantity: (state, action) => {
            state.items.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.quantity = action.payload.quantity;
                    console.log("lo quantity check karo - ", item.quantity);
                }
            });
        },

        clearCart: (state) => {
            state.items = [];
        }
    }
})

export const {addItem, updateQuantity, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;