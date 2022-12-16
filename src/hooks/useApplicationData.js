// import React from "react";
import { useState } from "react";

export default function useApplicationData() {
    const [appState, setAppState] = useState({ currentDevice: null });

    function setCurrentDevice(device) {
        setAppState({ ...appState, currentDevice: device });
    }

    return { appState, setCurrentDevice };
}
