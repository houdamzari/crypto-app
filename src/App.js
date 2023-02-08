import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  HomePage,
  Exchanges,
  CryptoDetails,
  CryptoCurrencies,
  News,
  LandingSection,
  CoinsSection,
} from "./components";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>

        <div className="main">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/exchanges" element={<Exchanges />} />
            <Route
              exact
              path="/cryptocurrencies"
              element={<CryptoCurrencies />}
            />
            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
          </Routes>
        </div>
      </div>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Cryptoverse
          <br />
          All rights reserved
        </Typography.Title>
        <Space/>
      </div>
    </>
  );
};

export default App;
