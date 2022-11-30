import PresetColorButton from "./components/PresetColorButton"

import axios from 'axios';
const CHRISTMAS_TREE_URL = process.env.REACT_APP_CHRISTMAS_TREE_URL;


function postColorRequest(color) {
    axios.post(CHRISTMAS_TREE_URL + "/setSolidPreset/", {
        color: color,
    })
        .catch(function (error) {
            console.log(error);
        });
}
function postTurnOffRequest() {
    axios.post(CHRISTMAS_TREE_URL + "/setSolidPreset/", {})
        .catch(function (error) {
            console.log(error);
        });
}

function SetSolidPreset() {
    return (
        < div className="SelectPattern" >
            Select the color you'd like to see.
            <div>
                <table>
                    <tr>
                        <td><PresetColorButton buttonText="White" onClick={() => postColorRequest("white")} /></td>
                        <td><PresetColorButton buttonText="Warm White" onClick={() => postColorRequest("warmWhite")} /></td>
                        <td><PresetColorButton buttonText="Autum Orange" onClick={() => postColorRequest("autumnOrange")} /></td>
                    </tr>
                    <tr>

                        <td><PresetColorButton buttonText="Light Orange" onClick={() => postColorRequest("lightOrange")} /></td>
                        <td><PresetColorButton buttonText="Yellow" onClick={() => postColorRequest("yellow")} /></td>
                        <td><PresetColorButton buttonText="Fall Yellow" onClick={() => postColorRequest("fallYellow")} /></td>
                    </tr>
                    <tr>
                        <td><PresetColorButton buttonText="Red" onClick={() => postColorRequest("red")} /></td>
                        <td><PresetColorButton buttonText="Blue" onClick={() => postColorRequest("blue")} /></td>
                        <td><PresetColorButton buttonText="Green" onClick={() => postColorRequest("green")} /></td>


                    </tr>
                    <tr>
                        <td><PresetColorButton buttonText="Purple" onClick={() => postColorRequest("purple")} /></td>
                        <td><PresetColorButton buttonText="Bright Purple" onClick={() => postColorRequest("brightPurple")} /></td>
                        <td><PresetColorButton buttonText="Dark Purple" onClick={() => postColorRequest("darkPurple")} /></td>
                    </tr>
                    <tr>
                        <td><PresetColorButton buttonText="Teal" onClick={() => postColorRequest("teal")} /></td>
                        <td><PresetColorButton buttonText="Pink" onClick={() => postColorRequest("pink")} /></td>
                        <td><PresetColorButton buttonText="Bright Violet" onClick={() => postColorRequest("brightViolet")} /></td>
                    </tr>
                </table>
            </div>
        </div >
    );
}

export default SetSolidPreset;


