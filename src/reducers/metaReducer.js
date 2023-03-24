import { typeStateMap } from "../constants/metaConstants";
export const metaReducer = (state, action) => {
  const stateName = typeStateMap[action.type];
  return { ...state, [stateName]: action.payload };
};
