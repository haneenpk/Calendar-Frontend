import { combineReducers } from "@reduxjs/toolkit";
import managerReducer from "./slices/managerSlice";
import employeesReducer from "./slices/employeesSlice";
import commonReducer from "./slices/commonSlice";

// Define the RootState type based on the combined reducers
const rootReducer = combineReducers({
  manager: managerReducer,
  employees: employeesReducer,
  common: commonReducer,
});

// RootState type
export type RootState = ReturnType<typeof rootReducer>;

// Reset root reducer state to initial state
export const resetRootReducer = (): RootState => {
  return {
    manager: managerReducer(undefined, {} as any),
    employees: employeesReducer(undefined, {} as any),
    common: commonReducer(undefined, {} as any),
  };
};

export default rootReducer;
