import React, { createContext, useContext, useMemo } from "react";
import io from "socket.io-client"

const SocketContext = createContext(null);

export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
};

export const SocketProvider = (prop) => {

    const socket = useMemo(() => io('https://socket-webrtc.vercel.app/api/socket'), []);


    return (
        <SocketContext.Provider value={socket}>
            {prop.children}
        </SocketContext.Provider>
    )
}
