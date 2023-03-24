import React from "react";

export const ConnectionTab = ({ wallet, onConnect }) => {
  return (
    <div>
      <button
        className="button"
        onClick={(event) => onConnect(event, wallet.id)}
      >
        <div className="btn button-text">{wallet.text}</div>
        <div className="btn button-icon">
          <img src={wallet.icon_url} alt={wallet.text} />
        </div>
      </button>
    </div>
  );
};
