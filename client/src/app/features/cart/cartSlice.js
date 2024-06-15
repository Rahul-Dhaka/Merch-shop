import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: ['border', 'frame'],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem: (state, action) => { 
            state.items.push(action.payload);
        },
        removeItem: (state, action) => { 
            state.items = state.items.filter(item => item!==action.payload);
        },

        clearCart: (state) => {
            state.items = [];
        }

    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;