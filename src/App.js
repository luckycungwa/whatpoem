// App.js (or your main router file)
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PoemsByAuthor from "./pages/PoemsByAuthor";
import Poem from "./pages/Poem";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author/:author" element={<PoemsByAuthor />} />
        <Route path="/poem/:title" element={<Poem />} />
      </Routes>
    </Router>
  );
};

export default App;
