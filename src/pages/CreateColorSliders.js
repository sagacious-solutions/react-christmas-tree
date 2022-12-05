import axios from "axios";
import classNames from "classnames";
import { useState, useEffect } from 'react';
import { io } from "socket.io-client";

import RgbSlider from "./components/RgbSlider";
import BasicButton from "./components/BasicButton";
import "./CreateColorSlider.css"

const CHRISTMAS_TREE_URL = process.env.REACT_APP_CHRISTMAS_TREE_URL;
const WEB_SOCKET_URL = process.env.REACT_APP_WEB_SOCKET_URL;
const socket = new WebSocket(WEB_SOCKET_URL, "protocolOne");

console.log(WEB_SOCKET_URL)



const buttonStyle = {}

function postColorRequest(color) {
    axios
        .post(CHRISTMAS_TREE_URL + "/setRgbColor/", {
            color: color,
        })
        .catch(function (error) {
            console.log(error);
        });
}

function liveControlTreeRGB() {

    socket.onopen = function (e) {
        alert("[open] Connection established");
        alert("Sending to server");
        socket.send("My name is John");
    };

    socket.onmessage = function (event) {
        alert(`[message] Data received from server: ${event.data}`);
    };

    socket.onclose = function (event) {
        if (event.wasClean) {
            alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
        } else {
            // e.g. server process killed or network down
            // event.code is usually 1006 in this case
            alert('[close] Connection died');
        }
    };

    socket.onerror = function (error) {
        alert(`[error]`);
    };
}



function CreateColorSliders() {
    const [rgb, setRgb] = useState([0, 0, 0]);
    const [socketEnabled, setSocketEnabled] = useState(false);
    let bttnGrpClass = classNames({ 'buttonGroup': true });
    let componentClass = classNames({ 'mainComponent': true });
    let liveButtonClass = classNames({ "socketEnabled": socketEnabled });
    const setColorButton = <BasicButton onClick={() => postColorRequest(rgb)} buttonText={`Set Tree to RGB(${rgb[0]},${rgb[1]},${rgb[2]})`} style={{ ...buttonStyle, "backgroundColor": `rgb(${rgb[0]},${rgb[1]},${rgb[2]})` }} />
    const disconnectTreeButton = <BasicButton onClick={() => { setSocketEnabled(false) }} buttonText={"Disconnect from tree."} style={{ ...buttonStyle, "backgroundColor": `black` }} />
    const setColorOrDisconnectButton = socketEnabled ? disconnectTreeButton : setColorButton
    const connectionButtonText = socketEnabled ? `Tree set to RGB(${rgb[0]},${rgb[1]},${rgb[2]})` : "Start Live Connection";
    const LIVEUPDATE = null
    const RgbSliderOnChange = socketEnabled ? LIVEUPDATE : setRgb;

    return (
        <div className={componentClass}>
            <RgbSlider onChange={RgbSliderOnChange} />
            <div className={bttnGrpClass}>
                {setColorOrDisconnectButton}
                <BasicButton className={liveButtonClass} onClick={() => { setSocketEnabled(!socketEnabled); liveControlTreeRGB() }} buttonText={connectionButtonText} style={{ "backgroundColor": socketEnabled ? `rgb(${rgb[0]},${rgb[1]},${rgb[2]})` : "green" }} />
            </div>
        </div>
    );
}

export default CreateColorSliders;
