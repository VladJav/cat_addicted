import axios from "axios";

export async function getCatUrl(){
    let response = await axios({
        method: 'get',
        url: 'https://api.thecatapi.com/v1/images/search?api_key=live_cOAzBC3uXU7jVdI3fOpTZj3LlysX3raL5UnFeFlgNiCZIxgynbhSIFzDqEOu9qql'
    })
    return response.data[0].url;
}