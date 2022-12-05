import axios from "axios";
import classNames from "classnames";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

import RgbSlider from "./components/RgbSlider";
import BasicButton from "./components/BasicButton";
import "./CreateColorSlider.css";

const CHRISTMAS_TREE_URL = process.env.REACT_APP_CHRISTMAS_TREE_URL;
const WEB_SOCKET_URL = process.env.REACT_APP_WEB_SOCKET_URL;

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

function liveControlTreeRGB() {
  socket = io(WEB_SOCKET_URL);

  socket.on("connect", () => {
    console.log("Connected to server.");
  });
}

function sendColorUpdate(color) {
  socket.emit("setColor", ["color"], console.log("server received data."));
}

function CreateColorSliders() {
  const [rgb, setRgb] = useState([0, 0, 0]);
  const [socketEnabled, setSocketEnabled] = useState(false);
  let bttnGrpClass = classNames({ buttonGroup: true });
  let componentClass = classNames({ mainComponent: true });
  let liveButtonClass = classNames({ socketEnabled: socketEnabled });
  const setColorButton = (
    <BasicButton
      onClick={() => postColorRequest(rgb)}
      buttonText={`Set Tree to RGB(${rgb[0]},${rgb[1]},${rgb[2]})`}
      style={{
        ...buttonStyle,
        backgroundColor: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`,
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
    ? `Tree set to RGB(${rgb[0]},${rgb[1]},${rgb[2]})`
    : "Start Live Connection";

  useEffect(() => {
    if (socketEnabled) {
      sendColorUpdate(rgb);
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
            setSocketEnabled(!socketEnabled);
            liveControlTreeRGB();
          }}
          buttonText={connectionButtonText}
          style={{
            backgroundColor: socketEnabled
              ? `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
              : "green",
          }}
        />
        <BasicButton
          onClick={() => {
            sendColorUpdate();
          }}
          buttonText={"Test"}
        />
      </div>
    </div>
  );
}

export default CreateColorSliders;
