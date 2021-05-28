import axios from "axios";


const instance = axios.create();
instance.defaults.baseURL = "https://builder-660e7-default-rtdb.firebaseio.com/";

export default instance;