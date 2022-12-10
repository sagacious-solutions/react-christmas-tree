import { useEffect, useState } from "react";
import BasicButton from "./components/BasicButton";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {
    postColorRequest,
    postCustomPatternRequest,
} from "../serverCommunication";
import { SketchPicker } from "react-color";

const buttonStyle = {};

function getRgb(color) {
    const r = color.rgb.r;
    const g = color.rgb.g;
    const b = color.rgb.b;
    return [r, g, b];
}

function generatePatternDots(pattern) {
    let avatars = [];

    pattern.forEach((color, index) => {
        avatars.push(
            <div style={{ marginTop: "0.5em" }}>
                <Avatar
                    key={`color-circle-${index}`}
                    sx={{
                        backgroundColor: color.hex,
                        marginLeft: index ? "0px" : "10px",
                    }}
                    children={""}
                />
            </div>
        );
    });

    return avatars;
}

function sendPatternToServer(pattern) {
    const rgbList = [];

    pattern.forEach((color) => {
        rgbList.push([color.rgb.r, color.rgb.g, color.rgb.b]);
    });

    postCustomPatternRequest(rgbList);
}

function CustomPattern() {
    const [pattern, setPattern] = useState([]);
    const [color, setColor] = useState({ rgb: { r: 50, g: 0, b: 0 } });
    const [rgb, setRgb] = useState(0);

    const handleColorChange = (color, _event) => {
        setColor(color);
    };

    useEffect(() => {
        setRgb(getRgb(color));
    }, [color]);

    return (
        <div>
            Make your own pattern.
            <SketchPicker onChange={handleColorChange} color={color} />
            <Stack
                style={{
                    display: "flex",
                    marginTop: 50,
                    height: "4em",
                    backgroundColor: "grey",
                }}
                direction="row"
                spacing={2}
            >
                {generatePatternDots(pattern)}
            </Stack>
            <div
                style={{
                    marginTop: 50,
                    display: "Flex",
                    justifyContent: "space-evenly",
                }}
            >
                <BasicButton
                    style={{}}
                    buttonText={"Preview Color"}
                    onClick={() => postColorRequest(rgb)}
                />
                <BasicButton
                    style={{}}
                    buttonText={"Add color to Pattern"}
                    onClick={() => setPattern([...pattern, color])}
                />
                <BasicButton
                    style={{}}
                    buttonText={"Set tree to Pattern"}
                    onClick={() => sendPatternToServer(pattern)}
                />
                <BasicButton
                    style={{}}
                    buttonText={"Clear Pattern"}
                    onClick={() => setPattern([])}
                />
            </div>
        </div>
    );
}

export default CustomPattern;
