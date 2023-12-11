import {configureStore} from "@reduxjs/toolkit";
import orderReducer from "./orderSlice";
import clientReducer from "./clientSlice";
import {
    persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
  import { combineReducers } from "redux";

  const rootReducer = combineReducers({
    order: orderReducer,
    client: clientReducer
  });

  const persistConfig = { key: "root",  storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });

  const persistor = persistStore(store);
  

export { store, persistor }
