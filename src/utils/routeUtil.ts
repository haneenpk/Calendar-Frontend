import { Location } from "react-router-dom";

// Define the type of the route which can be either a string or a RegExp
type Route = string | RegExp;

// `location` is of type `Location`, provided by react-router-dom
export const matchesRoute = (route: Route, location: Location): boolean => {
    if (route instanceof RegExp) {
        return route.test(location.pathname);
    } else {
        return location.pathname === route;
    }
};

// `routes` is an array of strings or regular expressions
export const checkToDisplayHeaderFooter = (routes: Route[], location: Location): boolean => {
    return routes.some((route) => matchesRoute(route, location));
};
