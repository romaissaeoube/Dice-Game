import React from "react";
import ReactDOM from "react-dom/client";
import Dice from "./app";
import "bootstrap/dist/css/bootstrap.min.css";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

function App() {
  return (
    <div>
      <Dice cache={5} />
    </div>
  );
}

root.render(<App />);