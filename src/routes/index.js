import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import useAuth from "../hooks/useAuth";
import Home from "../pages/home";
import Signin from "../pages/signin";
import Signup from "../pages/signup";

const Private = ({ Item }) => {
  const { signed } = useAuth();
  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Private Item={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
