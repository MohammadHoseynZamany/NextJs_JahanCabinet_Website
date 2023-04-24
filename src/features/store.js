import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./header/headerSlice";


const store = configureStore({
    reducer: {
        Header: headerReducer
    }
})

export default store