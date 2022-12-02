import axios from "axios";
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
    return (
        <div>
            Color Sliders go Here.
        </div>
    );
}

export default CreateColorSliders;
