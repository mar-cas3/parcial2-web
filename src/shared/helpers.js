import { BASE_URL } from "./constants"

export const getLogin =  (loginPayload) => {
    return fetch(`${BASE_URL}/login`, {
        method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginPayload)
    }).then(response => response.json())
    .then(data => data.status === 'success'  ||   data.status === 'Success' ? true : false)
}

export const getCoffees = () => {
    return fetch(`${BASE_URL}/cafes`, {
        method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
    }).then(response => response.json())
    .then(data => data)
}

export const getCoffeeById = (idx) => {
    return fetch(`${BASE_URL}/cafes/${idx}`, {
        method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
    }).then(response => response.json())
    .then(data => data)
}