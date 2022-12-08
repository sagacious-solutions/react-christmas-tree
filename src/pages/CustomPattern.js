import axios from "axios";
import { useEffect, useState } from "react";
import ColorPicker from "./components/ColorPicker";
import BasicButton from "./components/BasicButton";

const CHRISTMAS_TREE_URL = process.env.REACT_APP_CHRISTMAS_TREE_URL;

function CustomPattern() {
    const [color, setColor] = useState({ color: { r: 50, g: 0, b: 0 } });

    const handleColorChange = (color, _event) => {
        setColor(color);
    };

    useEffect(() => {}, []);

    function postColorRequest(color) {
        axios
            .post(CHRISTMAS_TREE_URL + "/setRgbColor/", {
                color: color,
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            Make your own pattern.
            <ColorPicker onChange={handleColorChange} color={color} />
            <BasicButton
                style={{ backgroundColor: color.hex }}
                buttonText={"Preview Color"}
            />
        </div>
    );
}

export default CustomPattern;
