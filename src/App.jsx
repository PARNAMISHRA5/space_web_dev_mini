import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
// import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Login from "./pages/Login";

const App = () => {
  return (
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />}></Route>
          <Route path="login" element={<Login />} />
          <Route path="technology" element={<Technology />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
