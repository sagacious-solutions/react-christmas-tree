import axios from "axios";

const CHRISTMAS_TREE_URL = process.env.REACT_APP_CHRISTMAS_TREE_URL;
const BOOKSHELF_URL = "http://192.168.1.212:5000";
const DB_URL = process.env.REACT_APP_DB_URL;


function sayHello(ip) {
    return axios.get("http://" + ip + ":5000/bonjour/");
}

function getDeviceList() {
    return axios.get(DB_URL + "/getDevices/");
}
function postNewDevice(device) {
    return axios.post(DB_URL + "/putNewDevice/", { device });
}

function postColorRequest(color) {
    axios
        .post(BOOKSHELF_URL + "/setRgbColor/", {
            color: color,
        })
        .catch(function (error) {
            console.log(error);
        });
}

function postCustomPatternRequest(pattern) {
    axios
        .post(BOOKSHELF_URL + "/setCustomPattern/", { pattern: pattern })
        .catch(function (error) {
            console.log(error);
        });
}

function postAninmationRequest(pattern, device) {
    axios
        // .post(BOOKSHELF_URL + "/setPattern/", {
        .post(`http://${device}:5000` + "/setPattern/", {
            pattern: pattern,
        })
        .catch(function (error) {
            console.log(error);
        });
}
function postTurnOffRequest() {
    axios.post(BOOKSHELF_URL + "/turnOffLights/", {}).catch(function (error) {
        console.log(error);
    });
}

export {
    postColorRequest,
    postCustomPatternRequest,
    postAninmationRequest,
    postTurnOffRequest,
    getDeviceList,
    postNewDevice,
    sayHello,
};
