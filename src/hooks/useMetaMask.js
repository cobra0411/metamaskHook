import { useEffect, useRef, useContext, useState } from "react";
import {
  MetaStateContext,
  MetaDispatchContext
} from "../contexts/MetaStateContext";

const chains = (chainId) => {
  switch (chainId) {
    case "1":
      return "mainnet";
    case "3":
      return "ropsten";
    case "4":
      return "rinkeby";
    case "5":
      return "goerli";
    case "42":
      return "kovan";
    case "11155111":
      return "sepiola";
    default:
      return `unknown`;
  }
};

export const useMetaMask = () => {
  const state = useContext(MetaStateContext);
  const dispatch = useContext(MetaDispatchContext);
  const [provider] = useState(window.ethereum);

  const _isMounted = useRef(true);

  useEffect(() => {
    return () => {
      _isMounted.current = false;
    };
  }, []);

  const connect = async () => {
    if (!provider) {
      throw new Error("metamask is missing");
    }

    await getAccounts({ requestPermission: true });
    await getChain();

    window.ethereum.on("accountsChanged", (accounts) => {
      if (!accounts.length) dispatch({ type: "SET_CONNECTED", payload: false });
      dispatch({ type: "SET_ACCOUNT", payload: accounts });
    });

    window.ethereum.on("chainChanged", (chainIdHex) => {
      const chainId = parseInt(chainIdHex, 16).toString();
      const chainInfo = { id: chainId, name: chains(chainId) };
      dispatch({ type: "SET_CHAIN", payload: chainInfo });
    });
  };

  const getAccounts = async (requestPermission = false) => {
    if (!provider) {
      console.warn("Metamask is not available.");
      return;
    }
    try {
      const accounts = await provider.request({
        method: requestPermission ? "eth_requestAccounts" : "eth_accounts",
        params: []
      });
      if (accounts.length) {
        dispatch({ type: "SET_CONNECTED", payload: true });
        dispatch({ type: "SET_ACCOUNT", payload: accounts });
      }
      return accounts;
    } catch (error) {
      throw Error(error);
    }
  };

  const getChain = async () => {
    if (!provider) {
      console.warn("Metamask is not available.");
      return;
    }
    try {
      const chainIdHex = await provider.request({
        method: "eth_chainId",
        params: []
      });
      const chainId = parseInt(chainIdHex, 16).toString();
      const chainInfo = { id: chainId, name: chains(chainId) };
      dispatch({
        type: "SET_CHAIN",
        payload: chainInfo
      });
      return chainInfo;
    } catch (error) {
      throw Error(error);
    }
  };
  return [connect, state];
};
