import asyncio
from asyncio import Event
from typing import Dict, List
from flask import Flask, jsonify, request, Response
from flask_socketio import SocketIO, join_room, leave_room, send
from uuid import uuid4
from json import dumps

from game_logic import lobby, answer
from functions import is_correct
from models import Player, Session

app = Flask(__name__)
socket = SocketIO(app)

sessions: Dict[str, Session] = {}

@app.route('/')
def index() -> str:
    return "Hello, World"

@app.route('/host', methods=["POST"])
def host() -> str:
    if type((data := request.get_json())) == dict:
        name = data["name"]
        id_ = str(uuid4())
        session = Session(id_, name, id_)
        sessions[id_] = session
        asyncio.create_task(lobby(session))
        return f"{id_}"
    else:
        return "ERROR"

# @app.route('/join/<string:id>')
# def join(id: str) -> Response:
#     try:
#         session: Session = sessions[id]
#     except KeyError:
#         return Response(status=404)
#     return Response(f"You joined {session.name}")

@app.route('/list')
def list_handler() -> str:
    return jsonify([s.name for s in sessions.values()])

@socket.on('join')
def on_join(data):
    id_: int = data["id"]
    name: str = data["name"]
    try:
        session: Session = sessions[id]
        session.participants[name] = Player(name)
    except KeyError:
        return "Room does not exist"
    join_room(id_)
    send(dumps({"joined": {"name": name, "is_host": session.host == name}}, json=True, room=data[id_]))

@socket.on('start')
def on_start(data):
    name: str = data["name"]
    id_: str = data["id"]
    session = sessions[id_]
    if session.name == name:
        session.started.set()
        send(dumps({"started": {}}), json=True, room=id_)

@socket.on('answer')
def on_answer(data):
    name: str = data["name"]
    id_: str = data["id"]
    guess: str = data["guess"]
    session = sessions[id_]
    if name in session.current_turn.unanswered_players and answer(session, guess, name):
        send(dumps({"answered": True}), json=True, room=id_)
    else:
        send(dumps({"message": guess}), json=True, room=id_)


if __name__ == '__main__':
    # socket.run(app)
    app.run(host='0.0.0.0', port=80)
