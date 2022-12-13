import PatternButton from "./components/PatternButton";
import {
    postAninmationRequest,
    postTurnOffRequest,
} from "../serverCommunication";

import axios from "axios";
const CHRISTMAS_TREE_URL = process.env.REACT_APP_CHRISTMAS_TREE_URL;

function SelectAnimation() {
    return (
        <div className="SelectPattern">
            Select the animation you'd like to see.
            <div>
                <div>
                    <PatternButton
                        buttonText="Rainbow Cycle"
                        onClick={() => postAninmationRequest("rainbowCycle")}
                    />
                </div>
                <div>
                    <PatternButton
                        buttonText="Slow Random Transition"
                        onClick={() =>
                            postAninmationRequest("slowRandomTransition")
                        }
                    />
                </div>
                <div>
                    <PatternButton
                        buttonText="Fast Random Transition"
                        onClick={() =>
                            postAninmationRequest("fastRandomTransition")
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

export default SelectAnimation;
