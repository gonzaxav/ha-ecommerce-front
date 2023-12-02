import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name:"order",
    initialState:[],
    reducers:{
        addProduct(state = [], action){
            return [...state, action.payload];
        },

        removeProduct(state = [], action){
            return state.filter((product)=>product._id !== action.payload);
        },

        deleteAll(state = [], action){
            return [];
        }
    }
})

const {actions, reducer} = orderSlice;
export const {addProduct, removeProduct, deleteAll} = actions;
export default reducer