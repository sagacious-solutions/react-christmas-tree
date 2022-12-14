import axios from "axios";

const CHRISTMAS_TREE_URL = process.env.REACT_APP_CHRISTMAS_TREE_URL;
const DB_URL = process.env.REACT_APP_DB_URL;

function sayHello(ip) {
    return axios.get("http://" + ip + "/bonjour/");
}

function getDeviceList() {
    return axios.get(DB_URL + "/getDevices/");
}

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

function postAninmationRequest(pattern) {
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

export {
    postColorRequest,
    postCustomPatternRequest,
    postAninmationRequest,
    postTurnOffRequest,
    getDeviceList,
};
