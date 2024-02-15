import * as React from "react";
import { CssBaseline } from "@mui/material";
import { Footer } from "./components/Footer";
import { MainContainer } from "./components/MainContainer";
import { Header } from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="app">
      <CssBaseline />
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
