import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MainRouter from "../routes/MainRouter";
import ManagerHeader from "../components/manager/Header";
import EmployeesHeader from "../components/employees/Header";
import Footer from "../components/Footer";
import { setLoggedIn as setManagerLoggedIn, setManagerData } from "../redux/slices/managerSlice";
import { setLoggedIn as setEmployeesLoggedIn, setEmployeesData } from "../redux/slices/employeesSlice";
import { checkToDisplayHeaderFooter } from "../utils/routeUtil";
import { employeesRoutesToCheck, managerRoutesToCheck } from "../config/routesConfig";
import { RootState, AppDispatch } from "../redux/store"; // Assuming you have a RootState type in the store


const Layout: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  // Use `RootState` to type the state in `useSelector`
  const isEmployeesLoggedIn = useSelector((state: RootState) => state.employees.isLoggedIn);
  const isManagerLoggedIn = useSelector((state: RootState) => state.manager.isLoggedIn);

  // Determine user role based on the pathname
  let role: 'manager' | 'employees' ;
  if (location.pathname.startsWith("/manager")) {
    role = "manager";
  } else {
    role = "employees";
  }

  // Check if header/footer should be displayed
  const shouldDisplayHeaderFooter = checkToDisplayHeaderFooter(
    role === "manager" ? managerRoutesToCheck : employeesRoutesToCheck,
    location
  );

  // useEffect cannot be async directly, so we'll define an inner async function
  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem(`${role}JwtToken`)) {
        if (role === "manager") {
          dispatch(setManagerLoggedIn(true));
          dispatch(setManagerData(localStorage.getItem("managerData")));
        } else if (role === "employees") {
          dispatch(setEmployeesLoggedIn(true));
          dispatch(setEmployeesData(localStorage.getItem("employeesData")));
        }
      }
    };

    fetchData(); // Call the async function inside the effect

  }, [isEmployeesLoggedIn, isManagerLoggedIn, role, dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      {shouldDisplayHeaderFooter && (
        role === "manager" ? <ManagerHeader /> : <EmployeesHeader /> 
      )}
      <main className="flex-1" style={{ paddingTop: shouldDisplayHeaderFooter ? 0 : 0 }}>
        <MainRouter />
      </main>
      {shouldDisplayHeaderFooter && (role === "manager" || role === "employees") && !location.pathname.includes("chat") && <Footer />}
    </div>
  );
};

export default Layout;
