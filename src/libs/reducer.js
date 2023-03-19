export const ACTIONS = Object.freeze({
  updateGrid: "Update Grid",
  updatePlayer: "Update Player",
  setWinner: "Set Winner"
});
//  setIcon((prev) => (prev === "X" ? "O" : "X"));
export const stateReducer = (state, action) => {
  if (action.type === ACTIONS.updateGrid)
    return { ...state, grid: action.payload };
  if (action.type === ACTIONS.updatePlayer)
    return { ...state, icon: state.icon === "X" ? "O" : "X" };
  if (action.type === ACTIONS.setWinner)
    return { ...state, winner: action.payload };
  return state;
};
