import { RequestForm } from "./RequestForm.js"
import { Requests } from "./PartyRequests.js"

export const ClownCall = () => {
    return `
        <h1>Buttons the Clown: Party Entertainment</h1>
        <section class="servicePartyRequestform">
            ${RequestForm()}
        </section>

        <section class="servicePartyRequestform">
            <h2>Party Requests</h2>
            ${Requests()}
        </section>
    `
}