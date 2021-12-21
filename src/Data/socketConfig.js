import io from "socket.io-client";
const URL = process.env.REACT_APP_SERVER_URL;
const socket = io(URL, {
  transports: ["websocket"],
});
export default socket;
