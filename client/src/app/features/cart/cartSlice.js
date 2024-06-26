import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: [{title: 'demo'}],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem: (state, action) => { 
            state.items.push(action.payload);
        },
        removeItem: (state, action) => { 
            state.items = state.items.filter(item => item.title!==action.payload.title);
        },

        clearCart: (state) => {
            state.items = [];
        }

    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;