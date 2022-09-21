import axios from "axios"
import endpoints from "../auth/Pages/settings"

const signIn = async (username, password) => {
    await axios.post(endpoints.localEndpointAuth, {
        username: "",
        password: ""
    }).then(console.log(resp))
}

export default signIn