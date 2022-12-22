import {sendCatPhoto} from "./sendCatPhoto.js";

export let interval = 0;
export function setCatInterval(ctx,delay){
    if(!!interval){
        clearInterval(interval)
    }
    interval = setInterval(async () =>{
        await sendCatPhoto(ctx)
    }, delay)
}