import React, { createContext, useContext, useMemo } from "react";
import io from "socket.io-client"

const SocketContext = createContext(null);

export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
};

export const SocketProvider = (prop) => {

    // const socket = useMemo(() => io('http://192.168.1.26:8000'), []);
    const socket = useMemo(() => io('https://socket-webrtc-7qxb.onrender.com'), []);


    return (
        <SocketContext.Provider value={socket}>
            {prop.children}
        </SocketContext.Provider>
    )
}
