import axios from "axios";

export async function getCatUrl(){

    let response = await axios({
        method: 'get',
        url: `https://api.thecatapi.com/v1/images/search?api_key=${process.env.CAT_API}`
    })
    return response.data[0].url;
}