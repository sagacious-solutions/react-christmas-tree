import PatternButton from "./components/PatternButton";
import {
    postAninmationRequest,
    postTurnOffRequest,
} from "../serverCommunication";

function SelectAnimation(props) {
    return (
        <div className="SelectPattern">
            Select the animation you'd like to see.
            <div>
                <div>
                    <PatternButton
                        buttonText="Rainbow Cycle"
                        onClick={() =>
                            postAninmationRequest(
                                "rainbowCycle",
                                props.currentDevice
                            )
                        }
                    />
                </div>
                <div>
                    <PatternButton
                        buttonText="Slow Random Transition"
                        onClick={() =>
                            postAninmationRequest(
                                "slowRandomTransition",
                                props.currentDevice
                            )
                        }
                    />
                </div>
                <div>
                    <PatternButton
                        buttonText="Fast Random Transition"
                        onClick={() =>
                            postAninmationRequest(
                                "fastRandomTransition",
                                props.currentDevice
                            )
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
