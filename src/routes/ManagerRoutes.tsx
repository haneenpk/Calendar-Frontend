import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/manager/Home";
import Login from "../pages/manager/auth/ManagerSignUp";
import ErrorPage from "../pages/ErrorPage";


// Interface for route definition
interface RouteProps {
  path: string;
  element: React.ReactElement | React.FunctionComponent<any> | null;
}

interface ManagerRoutesProps {
  isLoggedIn: boolean;
}

const ManagerRoutes = ({ isLoggedIn }: ManagerRoutesProps) => {

  const navigateToLogin = () => <Navigate to="/manager/login" />;
  const navigateHome = () => <Navigate to="/manager" />;

  const routes: RouteProps[] = [
    { path: "/", element: isLoggedIn ? <Home /> : navigateToLogin() },


    // Auth Route
    { path: "/login", element: !isLoggedIn ? <Login /> : navigateHome() },
    // Error Page
    { path: "/*", element: <ErrorPage /> },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default ManagerRoutes;