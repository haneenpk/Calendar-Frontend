import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Assuming you have a root reducer file

// Create the store
const store = configureStore({
  reducer: rootReducer,
});

// Define `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
