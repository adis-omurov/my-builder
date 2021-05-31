import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://my-builder-a1534-default-rtdb.firebaseio.com/";

export default instance;