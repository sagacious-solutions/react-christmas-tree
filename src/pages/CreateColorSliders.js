import axios from "axios";
import classNames from "classnames";
import { useState, useEffect } from 'react';


import RgbSlider from "./components/RgbSlider";
import BasicButton from "./components/BasicButton";

const CHRISTMAS_TREE_URL = process.env.REACT_APP_CHRISTMAS_TREE_URL;

const buttonStyle = { "margin-left": "20%", "margin-top": "5%", "width": "15%" }

function postColorRequest(color) {
    axios
        .post(CHRISTMAS_TREE_URL + "/setRgbColor/", {
            color: color,
        })
        .catch(function (error) {
            console.log(error);
        });
}

function CreateColorSliders() {
    let componentClass = classNames({ 'mainComponent': true })
    const [rgb, setRgb] = useState([0, 0, 0])

    useEffect(() => { }, [rgb])


    return (
        <div className={componentClass}>
            <RgbSlider onChange={setRgb} />
            <BasicButton onClick={() => postColorRequest(rgb)} buttonText="Set Color" style={{ ...buttonStyle, "backgroundColor": `rgb(${rgb[0]},${rgb[1]},${rgb[2]})` }} />
        </div>
    );
}

export default CreateColorSliders;
