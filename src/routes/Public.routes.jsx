import { PublicRoutes } from "../../src/models/routes";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => <Outlet />;
const PublicRoute = () => <Navigate replace to={PublicRoutes.Home} />;

export const Authenticated = () => {
  const credentials = sessionStorage.getItem("token");
  return credentials ? <PrivateRoute /> : <PublicRoute />;
};
