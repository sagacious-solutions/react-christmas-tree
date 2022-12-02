import * as React from 'react';
import VerticalSlider from "./VerticalSlider"
import { useState, useEffect } from 'react';

let classNames = require('classnames');

export default function RgbSlider() {
    let sldrGrpClass = classNames({ 'sliderGroup': true })
    const sliderSettings = { "min": 0, "max": 255 }
    const headerCss = { "color": "black" }
    const [red, setRed] = useState(127)
    const [green, setGreen] = useState(127)
    const [blue, setBlue] = useState(127)
    let bottomString = `This is the current color (${red}, ${green}, ${blue}).`

    useEffect(() => { console.log("poop") }, [red, green, blue])

    return (
        <div>
            <h1 style={headerCss}>Choose Your Color</h1>
            <div className={sldrGrpClass}>
                <VerticalSlider setColor={setRed} {...sliderSettings} />
                <VerticalSlider setColor={setGreen} {...sliderSettings} />
                <VerticalSlider setColor={setBlue} {...sliderSettings} />
            </div>
            <div>{bottomString}</div >
        </div>);
}

