import React, { lazy, ReactElement } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/employees/Home";

// const Profile = lazy(() => import("../pages/Users/Profile"));
// const EditProfile = lazy(() => import("../pages/Users/EditProfile"));
// const Upcoming = lazy(() => import("../pages/Users/Upcoming"));
// const ShowTime = lazy(() => import("../pages/Users/ShowTime"));
// const ShowSeats = lazy(() => import("../pages/Users/ShowSeats"));
// const ShowCheckout = lazy(() => import("../pages/Users/ShowCheckout"));
// const Chat = lazy(() => import("../pages/Users/Chat"));
// const BookingSuccess = lazy(() => import("../pages/Users/BookingSuccess"));
// const BookingHistory = lazy(() => import("../pages/Users/BookingHistory"));
// const Wallet = lazy(() => import("../pages/Users/Wallet"));

import Login from "../pages/common/Login";
import SignUp from "../pages/employees/auth/EmployeeSignUp";
import OTP from "../pages/employees/auth/Otp";
import ErrorPage from "../pages/common/ErrorPage";

// Define props type for UserRoutes
interface UserRoutesProps {
  isLoggedIn: boolean;
}

// Define a route config interface
interface RouteConfig {
  path: string;
  element: ReactElement;
}

// Convert the component to TypeScript
const UserRoutes: React.FC<UserRoutesProps> = ({ isLoggedIn }) => {

  const navigateToLogin = (): ReactElement => <Navigate to="/login" />;
  const navigateToHome = (): ReactElement => <Navigate to="/" />;

  // Define protected routes array with proper typing
  const protectedRoutes: RouteConfig[] = [
    { path: "/", element: isLoggedIn ? <Home /> : navigateToLogin() },
    { path: "/home", element: isLoggedIn ? <Home /> : navigateToLogin() },
    // { path: "/show", element: isLoggedIn ? <Home decide={"show"} /> : navigateToLogin() },
    // { path: "/profile", element: isLoggedIn ? <Profile /> : navigateToLogin() },
    // { path: "/edit-profile", element: isLoggedIn ? <EditProfile /> : navigateToLogin() },
    // { path: "/upcoming", element: isLoggedIn ? <Upcoming /> : navigateToLogin() },
    // { path: "/available", element: isLoggedIn ? <ShowTime /> : navigateToLogin() },
    // { path: "/show/seats", element: isLoggedIn ? <ShowSeats /> : navigateToLogin() },
    // { path: "/show/checkout", element: isLoggedIn ? <ShowCheckout /> : navigateToLogin() },
    // { path: "/chat", element: isLoggedIn ? <Chat /> : navigateToLogin() },
    // { path: "/booking/success", element: isLoggedIn ? <BookingSuccess /> : navigateToLogin() },
    // { path: "/booking/cancel", element: isLoggedIn ? <Chat /> : navigateToLogin() },
    // { path: "/booking-history", element: isLoggedIn ? <BookingHistory /> : navigateToLogin() },
    // { path: "/wallet", element: isLoggedIn ? <Wallet /> : navigateToLogin() },
  ];

  // Define auth routes array with proper typing
  const authRoutes: RouteConfig[] = [
    { path: "/login", element: !isLoggedIn ? <Login role="employees" /> : navigateToHome() },
    { path: "/sign-up", element: !isLoggedIn ? <SignUp /> : navigateToHome() },
    { path: "/verify-otp", element: !isLoggedIn ? <OTP /> : navigateToHome() },
  ];

  return (
    <Routes>
      {protectedRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      {authRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      {/* Error Page */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default UserRoutes;
