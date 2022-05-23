import { combineReducers } from "redux";
import { Products } from "./Products";
import { SingleProduct } from "./SingleProduct";
import { HomeProducts } from "./HomeProducts";
import {
    AddToCart,
    GetCart,
    UpdateCart,
    DeleteCart,
    CartSumTotal,
} from "./Cart";
import { LogIn, RegisterUser } from "./User";
import { VerifyPayment } from "./Paystack";

import { SendOrder, GetOrders } from "./Order";

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
    VerifyPayment,
    SendOrder,
    GetOrders,
});
