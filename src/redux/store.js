import { configureStore } from "@reduxjs/toolkit";
// import { applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = configureStore(
    { 
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
             }).concat(middlewares)
    }
);

export default store;