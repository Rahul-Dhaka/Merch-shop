import {createSlice} from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        return serializedState ? JSON.parse(serializedState) : { items: [] };
    } catch (e) {
        console.warn("Failed to load state from local storage:", e);
        return { items: [] };
    }
};

const saveCartToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart', serializedState);
    } catch (e) {
        console.warn("Failed to save state to local storage:", e);
    }
};

const initialState = loadCartFromLocalStorage();

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
            saveCartToLocalStorage(state);
        },
        removeItem: (state, action) => { 
            state.items = state.items.filter(item => item.title!==action.payload.title);
            saveCartToLocalStorage(state);
        },

        updateQuantity: (state, action) => {
            state.items.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.quantity = action.payload.quantity;
                    console.log("lo quantity check karo - ", item.quantity);
                }
            });
            saveCartToLocalStorage(state);
        },

        clearCart: (state) => {
            state.items = [];
            saveCartToLocalStorage(state);
        }
    }
})

export const {addItem, updateQuantity, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;