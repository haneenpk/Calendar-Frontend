import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the types for the initial state

interface EmployeesState {
    isLoggedIn: boolean;
    employeesData: any | null; // Replace `any` with the actual type if you have it
}

// Define the initial state using the above types
const initialState: EmployeesState = {
    isLoggedIn: localStorage.getItem("employeesJwtToken") ? true : false,
    employeesData: null,
};

// Create the employees slice with typed state and actions
const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        setLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
        setEmployeesData: (state, action: PayloadAction<any>) => {
            state.employeesData = action.payload; // You can replace `any` with the correct type for `employeesData`
        },
        resetEmployeesState: (state) => {
            state.isLoggedIn = false;
            state.employeesData = null;
        },
    },
});

// Export actions and reducer
export const {
    setLoggedIn,
    setEmployeesData,
    resetEmployeesState,
} = employeesSlice.actions;

export default employeesSlice.reducer;
