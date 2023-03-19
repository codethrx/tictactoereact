import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState
} from "react";
import { stateReducer, ACTIONS } from "./reducer";
import { INITIALSTATE, lines } from "./utils";

const StateCtx = createContext();
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, {
    icon: "X",
    grid: INITIALSTATE,
    winner: null
  });
  useEffect(() => {
    dispatch({ type: ACTIONS.setWinner, payload: checkWinner() });
  }, [state.icon]);

  const checkWinner = () => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        state.grid[a].icon &&
        state.grid[a].icon === state.grid[b].icon &&
        state.grid[a].icon === state.grid[c].icon
      ) {
        dispatch({ type: ACTIONS.updateGrid, payload: INITIALSTATE });
        return state.grid[a].icon;
      }
    }
    return null;
  };
  const addValue = (index) => {
    const replicaGrid = [...state.grid];
    replicaGrid[index] = { value: index, icon: state.icon };
    dispatch({ type: ACTIONS.updateGrid, payload: replicaGrid });
    dispatch({ type: ACTIONS.updatePlayer });
  };

  return (
    <StateCtx.Provider value={{ ...state, addValue }}>
      {children}
    </StateCtx.Provider>
  );
};
export const useStateProvider = () => useContext(StateCtx);
