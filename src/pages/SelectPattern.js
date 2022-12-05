import PatternButton from "./components/PatternButton";

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

function SelectPattern() {
    return (
        <div className="SelectPattern">
            Select the pattern you'd like to use.
            <div>
                <div>
                    <PatternButton
                        buttonText="Rainbow Cycle"
                        onClick={() => postPatternRequest("rainbowCycle")}
                    />
                </div>
                <div>
                    <PatternButton
                        buttonText="Slow Random Transition"
                        onClick={() =>
                            postPatternRequest("slowRandomTransition")
                        }
                    />
                </div>
                <div>
                    <PatternButton
                        buttonText="Fast Random Transition"
                        onClick={() =>
                            postPatternRequest("fastRandomTransition")
                        }
                    />
                </div>
                <div>
                    <PatternButton
                        buttonText="Turn Off"
                        onClick={postTurnOffRequest}
                    />
                </div>
            </div>
        </div>
    );
}

export default SelectPattern;
