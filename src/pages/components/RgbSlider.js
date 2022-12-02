import * as React from 'react';
import VerticalSlider from "./VerticalSlider"

let classNames = require('classnames');

export default function RgbSlider() {
    let sldrGrpClass = classNames({ 'sliderGroup': true })
    return (
        <div>
            <h1>Choose Your Color</h1>
            <div className={sldrGrpClass}>
                <VerticalSlider />
                <VerticalSlider />
                <VerticalSlider />
            </div>
        </div>);
}

