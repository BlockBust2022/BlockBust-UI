import { Navigate, useLocation } from "react-router-dom";
import { authUser } from "../../constant/auth";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let location = useLocation();

  if (!authUser()) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
