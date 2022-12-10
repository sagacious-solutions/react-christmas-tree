import axios from "axios";

const CHRISTMAS_TREE_URL = process.env.REACT_APP_CHRISTMAS_TREE_URL;

function postColorRequest(color) {
    axios
        .post(CHRISTMAS_TREE_URL + "/setRgbColor/", {
            color: color,
        })
        .catch(function (error) {
            console.log(error);
        });
}

function postCustomPatternRequest(pattern) {
    axios
        .post(CHRISTMAS_TREE_URL + "/setCustomPattern/", { pattern: pattern })
        .catch(function (error) {
            console.log(error);
        });
}

export { postColorRequest, postCustomPatternRequest };
