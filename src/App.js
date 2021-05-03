import React from "react";
import "./App.css";
import Provider from "./context/Provider";
import { Table, Search, SearchText } from "./components";

function App() {
  return (
    <div className="App-header">
      <Provider>
        <img width="400px" src="./logo.png" /> 
        <Search />
        <SearchText />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
