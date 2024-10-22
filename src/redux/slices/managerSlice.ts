import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the types for the initial state

interface ManagerState {
    isLoggedIn: boolean;
    managerData: any | null; // Replace `any` with the actual type if you have it
}

// Define the initial state using the above types
const initialState: ManagerState = {
    isLoggedIn: localStorage.getItem("managerJwtToken") ? true : false,
    managerData: null,
};

// Create the manager slice with typed state and actions
const managerSlice = createSlice({
    name: "manager",
    initialState,
    reducers: {
        setLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
        setManagerData: (state, action: PayloadAction<any>) => {
            state.managerData = action.payload; // You can replace `any` with the correct type for `managerData`
        },
        resetManagerState: (state) => {
            state.isLoggedIn = false;
            state.managerData = null;
        },
    },
});

// Export actions and reducer
export const {
    setLoggedIn,
    setManagerData,
    resetManagerState,
} = managerSlice.actions;

export default managerSlice.reducer;
