import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Make sure index.html has <div id="root"></div>
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<App />);
