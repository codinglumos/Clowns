import { sendPartyrequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userparentName = document.querySelector("input[name='serviceparentName']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userchildName = document.querySelector("input[name='servicechildName']").value
        const userreservationDate = document.querySelector("input[name='servicereservationDate']").value
        const userpartyTime = document.querySelector("input[name='servicepartyTime']").value
        const userchildrenAmount = document.querySelector("input[name='servicechildrenAmount']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userparentName,
            address: userAddress,
            childName: userchildName,
            neededBy: userreservationDate,
            partyTime: userpartyTime,
            childrenAmount: userchildrenAmount
        }

        // Send the data to the API for permanent storage
        sendPartyrequest(dataToSendToAPI)
    }
})

export const RequestForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="serviceparentName">Parent Name</label>
            <input type="text" name="serviceparentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="servicechildName">Child Name</label>
            <input type="text" name="servicechildName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="servicepartyTime">Party Time Length</label>
            <input type="number" name="servicepartyTime" class="input" />
        </div>
        <div class="field">
            <label class="label" for="servicechildrenAmount">Amount of Children</label>
            <input type="number" name="servicechildrenAmount" class="input" />
        </div>
        <div class="field">
            <label class="label" for="servicereservationDate">Reservation Date</label>
            <input type="date" name="servicereservationDate" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Party Request</button>
    `

    return html
}
