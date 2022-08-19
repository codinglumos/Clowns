import { fetchPartyrequests, fetchClowns } from "./dataAccess.js"
import { ClownCall } from "./ClownCall.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchPartyrequests()
        .then(() => fetchClowns())
        .then(
            () => {
                mainContainer.innerHTML = ClownCall()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => { 
        console.log("State of data has changed. Regenerating HTML...")
        render()
    }
)