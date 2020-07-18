import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { useRouteMatch } from 'react-router-dom';
import { LobbyPage } from './lobbyPage';
import { GamePage } from './gamePage';
import { WinPage } from './winPage';

import { API_ENDPOINT } from './homePage';

export const PlayPage = props => {
    const name = props.name;
    const route = useRouteMatch("/:id")
    const [state, setState] = useState("connecting");
    const id = route.params.id;

    useEffect(() => {
        console.log("Not Yet Emitted")
        const socket = socketio(API_ENDPOINT, {
            transports: ['websocket', 'polling', 'flashsocket']
        });
        socket.on("joined", (data) => setState("lobby"));
        socket.emit('join', {"name": "client", "id": route.params.id});
        console.log("Emitted");
        return () => socket.close();
    })

    if (state === "game") {
        return <GamePage/>;
    } else if (state === "win") {
        return <WinPage/>;
    } else if (state === "lobby") {
        return <LobbyPage/>;
    }
    // is connecting
    return <div>Connecting...</div>
}
