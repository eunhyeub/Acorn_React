import { configureStore } from "@reduxjs/toolkit";
import resourceReducer from "./ResourceSlice";

// 분업화도 가능
const Store = configureStore( {
    reducer:{
        resource:resourceReducer,
    }
});

export default Store;