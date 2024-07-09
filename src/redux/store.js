import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const middlewareEnhancer = applyMiddleware(...middlewares);

const store = configureStore(
    { 
        reducer: rootReducer, middlewareEnhancer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
            // {
            // //     // Ignore these field paths in all actions
            //     // ignoredActionPaths: ['meta.arg', 'User'],
            //  },
        })
    }
);

export default store;