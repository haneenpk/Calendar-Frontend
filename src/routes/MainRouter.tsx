import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import ManagerRoutes from "./ManagerRoutes";
import EmployeesRoutes from "./EmployeesRoutes";
import { RootState } from "../redux/store"; // Assuming the root state is defined in your store

const MainRouter: React.FC = () => {
  // Use correct typing for the state
  const isLoading = useSelector((state: RootState) => state.common.loading);
  const isManagerLoggedIn = useSelector((state: RootState) => state.manager.isLoggedIn);
  const isEmployeesLoggedIn = useSelector((state: RootState) => state.employees.isLoggedIn);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route
          path="/manager/*"
          element={<ManagerRoutes isLoggedIn={isManagerLoggedIn} />}
        />
        <Route path="/*" element={<EmployeesRoutes isLoggedIn={isEmployeesLoggedIn} />} />
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
