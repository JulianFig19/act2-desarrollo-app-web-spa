import {Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import React,{ useContext } from "react";

const ProtectedRoutes = ({ children }) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

     if (!user) {
        return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    }

    return children;
};

export default ProtectedRoutes;