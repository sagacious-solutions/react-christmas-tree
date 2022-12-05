import axios from "axios";
import classNames from "classnames";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

import RgbSlider from "./components/RgbSlider";
import BasicButton from "./components/BasicButton";
import "./CreateColorSlider.css";

const CHRISTMAS_TREE_URL = process.env.REACT_APP_CHRISTMAS_TREE_URL;

let socket = null;

const buttonStyle = {};

function postColorRequest(color) {
    axios
        .post(CHRISTMAS_TREE_URL + "/setRgbColor/", {
            color: color,
        })
        .catch(function (error) {
            console.log(error);
        });
}

function sendColorUpdate(color) {
    socket.emit("set_color", color);
}

function CreateColorSliders() {
    const [rgb, setRgb] = useState([0, 0, 0]);
    const [socketEnabled, setSocketEnabled] = useState(false);
    const [TimeoutHasPassed, setTimeoutHasPassed] = useState(true);
    let bttnGrpClass = classNames({ buttonGroup: true });
    let componentClass = classNames({ mainComponent: true });
    let liveButtonClass = classNames({ socketEnabled: socketEnabled });
    const rgbString = `${rgb[0]},${rgb[1]},${rgb[2]}`;

    const connectToSocket = () => {
        socket = io(CHRISTMAS_TREE_URL);

        socket.on("connect", () => {
            setSocketEnabled(true);
            console.log("Connected to server.");
        });
    };

    const setColorButton = (
        <BasicButton
            onClick={() => postColorRequest(rgb)}
            buttonText={`Set Tree to RGB(${rgbString})`}
            style={{
                ...buttonStyle,
                backgroundColor: `rgb(${rgbString})`,
            }}
        />
    );
    const disconnectTreeButton = (
        <BasicButton
            onClick={() => {
                setSocketEnabled(false);
            }}
            buttonText={"Disconnect from tree."}
            style={{ ...buttonStyle, backgroundColor: `black` }}
        />
    );
    const setColorOrDisconnectButton = socketEnabled
        ? disconnectTreeButton
        : setColorButton;
    const connectionButtonText = socketEnabled
        ? `Tree set to RGB(${rgbString})`
        : "Start Live Connection";


    useEffect(() => {
        // Set timeout before sending further light change requests
        // This is necessary to allow the server time to stop polling and run the routine to
        // change the lights. I feel this isn't necessarily the best strategy as that time
        // could be effected by other variables. 
        let TIMEOUT = 100;
        if (socketEnabled && TimeoutHasPassed) {
            sendColorUpdate(rgb);
            setTimeoutHasPassed(false);
            setTimeout(() => {
                setTimeoutHasPassed(true);
            }, TIMEOUT);
        }
    }, [rgb]);

    return (
        <div className={componentClass}>
            <RgbSlider onChange={setRgb} />
            <div className={bttnGrpClass}>
                {setColorOrDisconnectButton}
                <BasicButton
                    className={liveButtonClass}
                    onClick={() => {
                        connectToSocket();
                    }}
                    buttonText={connectionButtonText}
                    style={{
                        backgroundColor: socketEnabled
                            ? `rgb(${rgbString})`
                            : "green",
                    }}
                />
                <BasicButton
                    onClick={() => {
                        sendColorUpdate(rgb);
                    }}
                    buttonText={"Test"}
                />
            </div>
        </div>
    );
}

export default CreateColorSliders;
