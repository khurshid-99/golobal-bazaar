import React from "react";
import { About, Home, NotFound } from "./components";
import { Route, Routes } from "react-router";
import AppLayOut from "./components/AppLayOut";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayOut />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
