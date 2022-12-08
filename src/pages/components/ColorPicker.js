import { useState } from "react";
import { SketchPicker } from "react-color";

function ColorPicker(props) {
    return (
        <div>
            <SketchPicker color={props.color} onChange={props.onChange} />
        </div>
    );
}

export default ColorPicker;
