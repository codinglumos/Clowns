import { getPartyrequests, deletePartyrequest, getClowns, saveCompletions } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deletePartyrequest(parseInt(requestId))
    }
})

export const Requests = () => {
    const requests = getPartyrequests()
    const clowns = getClowns()
    const convertRequest = (request) => {
        return `
    <li>
        ${request.childName}
        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
        <select class="clowns" id="clowns">
        <option value="">Choose</option>
        ${
            clowns.map(
                clown => {
                    return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
                }
            ).join("")
        }
    </select>
    </li>`
    }

    let html = `
        <ul>
             ${requests.map(convertRequest).join("")}
        </ul>
    `

    return html
}

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")
               // saveCompletions(requestId, clownId)
            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
        const completion = {
            requestId: parseInt(requestId),
            clownId: parseInt(clownId),
            date_completed: Date.now()

        }
            saveCompletions(completion)

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

        }
    }
)

