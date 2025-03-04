import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/types";

interface CartState{
    items: Product[],
    total: number,
    loading: boolean, 
    error: string | null,
}

const initialState : CartState = {
    items: [],
    total: 0,
    loading: false,
    error: null,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<Product>){
            state.items.push(action.payload);
            state.total += action.payload.price;
        },
        removeItem(state, action: PayloadAction<string>){
            const itemId : number = +action.payload
            state.items = state.items.filter(item => item.id !== itemId )
        }
    }
})




export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;