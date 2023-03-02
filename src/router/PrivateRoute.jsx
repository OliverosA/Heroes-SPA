import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);

  const { pathname, search } = useLocation();

  const lasPath = pathname + search;
  localStorage.setItem("lastPath", lasPath);

  return logged ? children : <Navigate to={"/login"} />;
};
