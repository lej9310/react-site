import { configureStore } from "@reduxjs/toolkit"
import { store_redux_slice } from "./store_redux_slice"


export const store_redux = configureStore({
    reducer: {
        // slice 수동 등록
        counter: store_redux_slice.reducer,
    },
})