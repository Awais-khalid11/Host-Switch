import { io } from "socket.io-client";
import { getToken } from ".";

const URL = import.meta.env.VITE_SOCKET_URL;
const token = getToken();
const socket = io(URL, {
  autoConnect: true,
  auth: {
    token: token,
  },
  transports: ["websocket", "polling"],
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionAttempts: 5,
  maxReconnectionAttempts: 5,
  timeout: 20000,
  forceNew: false,
});

export default socket;
