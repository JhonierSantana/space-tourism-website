import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Destination from "../pages/Destination";
import Main from "../pages/Main";
import Crew from "../pages/Crew";
import Technology from "../pages/Technology";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
