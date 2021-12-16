import axios from "axios";


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 09whGASG9zihv6YzDSus1-AxaziAP-bXDzliavSBUp8'
    }
});