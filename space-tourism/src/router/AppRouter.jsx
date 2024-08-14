import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Destination from "../pages/Destination";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/destination" element={<Destination />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
