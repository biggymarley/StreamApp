import { React, useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";

function JoinRoom() {
  const ENDPOINT = process.env.REACT_APP_TOKEN_ENDPOINT;
  const ROOM_ID = process.env.REACT_APP_ROOM_ID;
  const hmsActions = useHMSActions();

  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("broadcaster");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch(`${ENDPOINT}api/token`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     user_id: `${Date.now()}`,
    //     role: selectedRole, //broadcaster, hls-viewer
    //     type: "app",
    //     room_id: ROOM_ID,
    //   }),
    // })
    // const { token } = await response.json()
    // Joining the room
    hmsActions.join({
      userName: username,
      user_id: `${Date.now()}`,
      authToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoyLCJ0eXBlIjoiYXBwIiwiYXBwX2RhdGEiOm51bGwsImFjY2Vzc19rZXkiOiI2NjA1YWZjNmJhYmMzM2YwMGU0YWI4NjMiLCJyb2xlIjoiYnJvYWRjYXN0ZXIiLCJyb29tX2lkIjoiNjYwNWI5NGRjYjFiMWYwNjNhY2ZjMGFlIiwidXNlcl9pZCI6IjgyOTU0Y2MzLWY1YzQtNDFmZC1hNzgyLWQ3MzhkY2NiNmVhNCIsImV4cCI6MTcxMTczNzU1MCwianRpIjoiNjAwMjhkZDQtYTQyYi00M2Y3LTk5ZTEtN2ZjODRlZTIwYzdjIiwiaWF0IjoxNzExNjUxMTUwLCJpc3MiOiI2NjA1YWZjNmJhYmMzM2YwMGU0YWI4NjEiLCJuYmYiOjE3MTE2NTExNTAsInN1YiI6ImFwaSJ9.zmN4HgquAGoSs2-CCkm969U9rjHJ_vcGiBC5wCbCdiA",
      initEndpoint:
        "https://prod-in2.100ms.live/hmsapi/example.app.100ms.live/",
      room_id: "6605afecf023b091441661be",
      role: selectedRole,
    });
  };
  return (
    <form className="join" onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="Enter name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {selectedRole === "broadcaster" ? (
        <input
          required
          placeholder="Enter Admin password"
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      ) : (
        false
      )}

      <select
        type="text"
        required
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        placeholder="Select Role"
      >
        <option>broadcaster</option>
        <option>hls-viewer</option>
      </select>
      <button
        type="submit"
        disabled={selectedRole === "broadcaster" && password !== "Biggy420R"}
      >
        Join
      </button>
    </form>
  );
}

export default JoinRoom;
