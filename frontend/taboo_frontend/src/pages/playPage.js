import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { LobbyPage } from "./lobbyPage";
import { GamePage } from "./gamePage";
import { WinPage } from "./winPage";

export const PlayPage = (props) => {
  const name = props.name;
  const route = useRouteMatch("/:id");

  const [state, setState] = useState("lobby");

  if (state === "game") {
    return <GamePage />;
  } else if (state === "win") {
    return <WinPage />;
  }
  return <LobbyPage />;
};
