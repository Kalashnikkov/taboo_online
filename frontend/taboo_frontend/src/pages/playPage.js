import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { LobbyPage } from './lobbyPage';
import { GamePage } from './gamePage';
import { WinPage } from './winPage';

import { API_ENDPOINT } from './homePage';

export const PlayPage = props => {
    const route = useRouteMatch("/taboo/:id")
    const [state, setState] = useState({ state: "connecting" });
    const [socket, setSocket] = useState(null)
    const history = useHistory()
    const id = route.params.id;
    const name = window.sessionStorage.getItem("name");
    const [is_host, setHost] = useState(false)

    useEffect(() => {
        if (socket == null) {
            const socket_ = socketio(API_ENDPOINT, {
                transports: ['websocket', 'polling', 'flashsocket']
            });
            socket_.on("joined", (data) => {
                if (data.name === name && data.is_host) {
                    setHost(true)
                }
                setState((old) => {
                    if (old.state !== "lobby") {
                        return { state: "lobby", names: [data["name"]] }
                    } else if (!old.names.includes(data["name"])) {
                        return { state: "lobby", names: [...old.names, data["name"]] }
                    }
                    return old
                }
            )})
            socket_.on("room-does-not-exist", (_) => setState({state: "redirecting"}))
            socket_.on("started", _ => setState({state: "game"}))
            socket_.emit('join', {"name": name, "id": route.params.id})
            setSocket(socket_)
        }
    }, [socket])

    if (state.state === "redirecting") {
        console.log("redirecting")
        history.push("/taboo")
        return <div></div>
    } else if (state.state === "connecting") {
        return <div>Connecting...</div>
    } else if (state.state === "game") {
        return <GamePage/>;
    } else if (state.state === "win") {
        return <WinPage/>;
    } else if (state.state === "lobby") {
        return <LobbyPage socket={socket} names={state.names} id={id} is_host={is_host} />;
    }
}
