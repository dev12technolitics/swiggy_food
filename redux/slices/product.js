import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    error: null,
    blog: [],
};


const productSliceSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true;
        },
        
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

    },
});
export default productSliceSlice.reducer;








