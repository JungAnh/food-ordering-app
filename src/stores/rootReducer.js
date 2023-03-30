import { combineReducers } from "redux";
import cartReducer from "./cart/cartSlide";
import productReducer from "./menu/productsSlice";
import addressReducer from "./useInfo/addressSlice";

const rootReducer = combineReducers(
    {
        cart: cartReducer,
        products: productReducer,
        address: addressReducer
    }
);

export default rootReducer;