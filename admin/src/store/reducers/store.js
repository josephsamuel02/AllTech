import { rootReducer } from "./root";

import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleWare from "redux-promise";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["LogIn"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(promiseMiddleWare))
);

const persistor = persistStore(store);

export default store;
export { persistor };
