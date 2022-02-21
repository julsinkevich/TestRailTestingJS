import axios from "axios";

export default function restClient(url) {
    async function postRequest(body, {email, password}) {
        await axios.post(url, body, {
            auth: {
                username: email,
                password: password
            }
        })
    }

    return {
        postRequest
    };
}
