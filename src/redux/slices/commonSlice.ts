import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the initial state
interface CommonState {
    loading: boolean;
}

// Initial state with the type
const initialState: CommonState = {
    loading: false,
};

// Create the slice with typed state and actions
const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

// Export actions and reducer
export const { setLoading } = commonSlice.actions;
export default commonSlice.reducer;
