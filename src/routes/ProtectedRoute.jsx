import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { uid } = useSelector((state) => state.auth);

  if (!uid) {
    return <Navigate to="/auth/login"></Navigate>;
  }

  return children;
};
