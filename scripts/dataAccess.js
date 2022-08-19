const applicationState = {
    Partyrequests: []
}

const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

export const fetchPartyrequests = () => {
    return fetch(`${API}/partyrequests`)
        .then(response => response.json())
        .then(
            (Requests) => {
                // Store the external state in application state
                applicationState.Partyrequests = Requests
            }
        )
}

export const getPartyrequests = () => {
    return applicationState.Partyrequests.map(request => ({...request}))
}

export const sendPartyrequest = (userRequest) => {
    const fetchChoices = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userRequest)
    }


    return fetch(`${API}/partyrequests`, fetchChoices)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const deletePartyrequest = (id) => {
    return fetch(`${API}/partyrequests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.clowns = data
            }
        )
}

export const getClowns = () => {
    return applicationState.clowns.map(clown => ({...clown}))
}

export const fetchCompletion = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.completions = data
            }
        )
}

export const saveCompletions = (userServiceRequest) => {
    userServiceRequest.date_completed = Date.now()
    const completions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }
    return fetch(`${API}/completions`, completions)
    .then(response => response.json())
    .then(
        () => {
            
        }
    ) 
}