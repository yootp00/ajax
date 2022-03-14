import axios from "axios";

import { API_KEY,API_URL } from "../constants/_constants";

const instance = axios.create({
    baseURL : API_URL,
    params:{
        language:'ko-KR',
        api_key: API_KEY
    }
});

export default instance;