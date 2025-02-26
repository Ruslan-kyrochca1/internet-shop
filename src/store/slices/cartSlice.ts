import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/types";


interface CartState{
    items: Product[],
    total: number,
}

const initialState : CartState = {
    items: [
        {id: 1,
        name: "Кросовки",
        price: 2500,}],
    total: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<Product>) {
            state.items.push(action.payload);
            state.total += action.payload.price; 
        },
        removeItem(state, action: PayloadAction<string>){
            const itemId : number = +action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
        }
    }
})

export const {addItem, removeItem} = cartSlice.actions;

export default cartSlice.reducer;