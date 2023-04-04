import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRouteStudent = ({ children }) => {
    const isLoggedIn = useAuth();
    
    return isLoggedIn ? children : <Navigate to="/"></Navigate>;
  };

  export default PrivateRouteStudent;