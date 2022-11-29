import PatternButton from "./components/PatternButton"

import axios, { isCancel, AxiosError } from 'axios';

function postPatternRequest() {
    console.log("Poop")

    axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function SelectPattern() {
    return (
        < div className="SelectPattern" >
            Select the pattern you'd like to use.
            <div>
                <PatternButton buttonText="Rainbow Cycle" onClick={postPatternRequest} />
            </div>
        </div >
    );
}

export default SelectPattern;


