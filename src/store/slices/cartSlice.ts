import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/types";

interface CartState{
    items: ProductType[],
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
        addItem(state, action: PayloadAction<ProductType>){
            const item = state.items.find((i) => i.id === action.payload.id)
            if(item) {
                item.quantity = (item.quantity || 1) + 1;
            } else{
                state.items.push(action.payload);
            }
            state.total += action.payload.price;
        },
        removeItem(state, action: PayloadAction<number>){
            const itemId : number = action.payload
            state.items = state.items.filter(item => item.id !== itemId )
        }
    }
})




export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;