import PatternButton from "./components/PatternButton"

import axios from 'axios';
const CHRISTMAS_TREE_URL = process.env.REACT_APP_CHRISTMAS_TREE_URL;


function postPatternRequest(pattern) {
    axios.post(CHRISTMAS_TREE_URL + "/setPattern/", {
        pattern: pattern,
    })
        .catch(function (error) {
            console.log(error);
        });
}
function postTurnOffRequest() {
    axios.post(CHRISTMAS_TREE_URL + "/turnOffLights/", {})
        .catch(function (error) {
            console.log(error);
        });
}

function SetSolidPreset() {
    return (
        < div className="SelectPattern" >
            Select the pattern you'd like to use.
            <div>
                <div>
                    <PatternButton buttonText="White" onClick={() => postPatternRequest("rainbowCycle")} />
                </div>
            </div>
        </div >
    );
}

export default SetSolidPreset;


