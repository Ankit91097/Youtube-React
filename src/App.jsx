import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
    </div>
  );
};

export default App;
