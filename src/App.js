import * as React from "react";
import { CssBaseline } from "@mui/material";
import { Footer } from "./components/Footer/Footer";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { Header } from "./components/Header/Header";
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
