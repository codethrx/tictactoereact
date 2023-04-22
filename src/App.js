import "./styles.css";
import { useState, useEffect } from "react";
import { useStateProvider } from "./libs/state";

import Grid from "./components/Grid";
import Player from "./components/Player";
export default function App() {
  //variables devined
  const { grid, addValue, winner, icon } = useStateProvider();
  const gridProps = { grid, addValue };
  const playerProps = { winner, icon };
  //source
  return (
    <div>
      <h1>Tic tac toe hola amoras</h1>

      <Grid {...gridProps} />
      <Player {...playerProps} />
    </div>
  );
}
