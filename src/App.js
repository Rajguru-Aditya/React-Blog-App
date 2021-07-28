import React from "react";
import TopBar from "./components/topBar/TopBar";
// import Home from "./pages/home/Home";
import Single from "./pages/single/Single";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        <Single />
      </header>
    </div>
  );
}

export default App;
