import React, { useReducer } from "react";
import { metaReducer } from "../reducers/metaReducer";
const initialMetaState = {
  account: [],
  chain: { id: null, name: "" },
  isConnected: false
};
export const MetaStateContext = React.createContext(initialMetaState);
export const MetaDispatchContext = React.createContext();
export const MetaMaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(metaReducer, initialMetaState);
  return (
    <MetaDispatchContext.Provider value={dispatch}>
      <MetaStateContext.Provider value={state}>
        {children}
      </MetaStateContext.Provider>
    </MetaDispatchContext.Provider>
  );
};
