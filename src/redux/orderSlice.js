import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name:"order",
    initialState:[],
    reducers:{
        addProduct(state, action){
            const selectedProduct = state.find((item)=> item.productId === String(action.payload.productId));
            if(selectedProduct){
                selectedProduct.qty = selectedProduct.qty + action.payload.qty;
            } else {
                state.push(action.payload);
            }
        },

        removeProduct(state = [], action){
            return state.filter((product)=>product.productId !== action.payload);
        },
        reduceQty(state, action){
            const selectedProduct = state.find((item)=> item.productId === String(action.payload));
            selectedProduct.qty = selectedProduct.qty - 1;
        },

        deleteAll(state = [], action){
            return [];
        }
    }
})

const {actions, reducer} = orderSlice;
export const {addProduct, removeProduct, deleteAll, reduceQty} = actions;
export default reducer