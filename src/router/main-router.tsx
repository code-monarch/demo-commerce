import React from "react";

import { Route, Routes } from "react-router-dom";
import { DASHBOARD_PAGE, HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE } from "../constants";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./protected-route";
import Dashboard from "../pages/Dashboard";

const MainRouter: React.FC<React.PropsWithChildren> = () => {
  return (
    <Routes>
      <Route element={<Home />} path={HOME_PAGE} />
      <Route
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
        path={DASHBOARD_PAGE}
      />
      <Route element={<Login />} path={LOGIN_PAGE} />
      <Route element={<Register />} path={REGISTER_PAGE} />
    </Routes>
  );
};

export default MainRouter;
