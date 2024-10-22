import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import ManagerRoutes from "./ManagerRoutes";
import EmployeesRoutes from "./EmployeesRoutes";

// Interface for global state
interface RootState {
  common: { loading: boolean };
  manager: { isLoggedIn: boolean };
  employees: { isLoggedIn: boolean };
}

// Interface for route props with typed isLoggedIn prop
interface RouteProps {
  isLoggedIn: boolean;
}

const MainRouter: React.FC = () => {
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