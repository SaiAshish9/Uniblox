import React from "react";
import { Banner } from "components";
import { Header } from "components";
import { Route, Routes } from "react-router-dom";
import { Home } from "screens";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
