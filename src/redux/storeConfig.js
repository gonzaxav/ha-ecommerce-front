import {configureStore} from "@reduxjs/toolkit";
import orderReducer from "./orderSlice";
import clientReducer from "./clientSlice";

const store = configureStore({
    reducer:{
        order: orderReducer,
        client: clientReducer
    }
})

export default store;
