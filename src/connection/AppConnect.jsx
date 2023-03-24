import React, { useContext } from "react";
import { ConnectionTab } from "./ConnectionTab";
import { ConnectionTabWrapper } from "./ConnectionTabWrapper";
export const AppConnect = ({ title, wallets, onConnect }) => {
  return (
    <div className="appConnect">
      <h3> {title}</h3>
      <ConnectionTabWrapper>
        {wallets.map((wallet) => (
          <ConnectionTab
            key={wallet.id}
            wallet={wallet}
            onConnect={onConnect}
          />
        ))}
      </ConnectionTabWrapper>
    </div>
  );
};
