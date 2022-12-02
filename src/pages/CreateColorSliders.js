import axios from "axios";
import classNames from "classnames";
import { useState } from 'react';


import RgbSlider from "./components/RgbSlider";
import "./CreateColorSliders.css"

const CHRISTMAS_TREE_URL = process.env.REACT_APP_CHRISTMAS_TREE_URL;

function postPatternRequest(pattern) {
    axios
        .post(CHRISTMAS_TREE_URL + "/setPattern/", {
            pattern: pattern,
        })
        .catch(function (error) {
            console.log(error);
        });
}
function postTurnOffRequest() {
    axios
        .post(CHRISTMAS_TREE_URL + "/turnOffLights/", {})
        .catch(function (error) {
            console.log(error);
        });
}

function CreateColorSliders() {
    let componentClass = classNames({ 'mainComponent': true })
    const [rgb, setRgb] = useState([0, 0, 0])


    return (
        <div className={componentClass}>
            <RgbSlider />
        </div>
    );
}

export default CreateColorSliders;
