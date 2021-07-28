import React from "react";
import TopBar from "./topBar/TopBar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        <Home />
      </header>
    </div>
  );
}

export default App;
