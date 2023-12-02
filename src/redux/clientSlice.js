import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
    name:"client",
    initialState:null,
    reducers:{
        login(state, action){
            return action.payload;
        },

        logout(state, action){
            return null;
        }
    }
})

const {actions, reducer} = clientSlice;
export const {login} = actions;
export const {logout} = actions;
export default reducer