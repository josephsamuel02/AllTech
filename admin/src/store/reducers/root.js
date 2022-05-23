import { combineReducers } from "redux";
import { Products, CreateProduct } from "./Products";
import { SingleProduct } from "./SingleProduct";
import { HomeProducts } from "./HomeProducts";
import {
    AddToCart,
    GetCart,
    UpdateCart,
    DeleteCart,
    CartSumTotal,
} from "./Cart";
import { LogIn, RegisterUser, GetUsers } from "./User";

import { GetOrders } from "./Order";
import { incomeStats } from "./Stats";
export const rootReducer = combineReducers({
    Products,
    SingleProduct,
    HomeProducts,
    AddToCart,
    GetCart,
    UpdateCart,
    DeleteCart,
    CartSumTotal,
    LogIn,
    RegisterUser,
    GetOrders,
    incomeStats,
    GetUsers,
    CreateProduct,
});
