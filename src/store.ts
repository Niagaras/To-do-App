import { configureStore } from "@reduxjs/toolkit";
import editingTaskReducer from "./features/editSlice";

export const store = configureStore({
    reducer:{
        'editingTask': editingTaskReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;