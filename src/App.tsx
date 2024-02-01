import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <main className="main-container">
      <Header />
      <Dashboard />
      <Footer />
    </main>
  );
}

export default App;
