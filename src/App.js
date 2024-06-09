import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import PoemsByAuthor from "./pages/PoemsByAuthor";
import Poem from "./pages/Poem";
import { NextUIProvider } from "@nextui-org/system";

const App = () => {
  return (
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/author/:author" element={<PoemsByAuthor />} />
          <Route path="/poem/:title" element={<Poem />} />
        </Routes>
      </Router>
    </NextUIProvider>
  );
};

export default App;
