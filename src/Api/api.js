import axios from "axios";

export async function getApi() {
    const response = await axios.get('js/data.json');
    return response;
}