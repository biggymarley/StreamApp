import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HMSRoomProvider } from "@100mslive/react-sdk";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HMSRoomProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HMSRoomProvider>
);
