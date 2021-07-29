import React from "react";
import TopBar from "./components/topBar/TopBar";
import Write from "./components/write/Write";
// import Home from "./pages/home/Home";
// import Single from "./pages/single/Single";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        <Write />
      </header>
    </div>
  );
}

export default App;
