import React from "react";

import { Route, Routes } from "react-router-dom";
import { HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE } from "./constants";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const MainRouter: React.FC<React.PropsWithChildren> = () => {
  return (
    <Routes>
      <Route element={<Home />} path={HOME_PAGE} />
      <Route element={<Login />} path={LOGIN_PAGE} />
      <Route element={<Register />} path={REGISTER_PAGE} />
    </Routes>
  );
};

export default MainRouter;
