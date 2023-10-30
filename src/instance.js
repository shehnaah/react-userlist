import axios from "axios";

const userInstance = axios.create({
    baseURL: "https://api.slingacademy.com/v1/sample-data/users"
});

export default userInstance;