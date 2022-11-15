import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID KrvNEaah8Ypcjb_V2j3Bz2HIPAzv26IoP0VltMnrKXA'
    }
});