import "./App.css";
import { useState } from "react";

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {

  const [search, setSearch] = useState("");

  return (
    <>
      <TopBar />
      <Header search={search} setSearch={setSearch} />
      <Home search={search} />
      <Footer />
    </>
  );
}

export default App; 
