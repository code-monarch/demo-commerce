"use client";
import { useNavigate } from "react-router-dom";
import { getTokenCookie } from "../helpers/session-manager";
import { LOGIN_PAGE } from "../constants";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: any) => {
  const isAuthenticated = getTokenCookie();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate(`${LOGIN_PAGE}`);
    }
  }, [isAuthenticated]);

  return children;
};

export default ProtectedRoute;
