import React from "react";
import { AppConnectWrapper } from "./connection/AppConnectWrapper";
import "./styles.css";
import { MetaMaskProvider } from "./contexts/MetaStateContext";

export default function App() {
  return (
    <div className="App">
      <MetaMaskProvider>
        <AppConnectWrapper />
      </MetaMaskProvider>
    </div>
  );
}
