import {Markup} from "telegraf";
import {getCatUrl} from "./getCatUrl.js";

export async function sendCatPhoto(ctx){
    const catUrl = await getCatUrl();
    const send = catUrl.endsWith(".gif") ? "sendAnimation" : "sendPhoto"
    await ctx.telegram[send](ctx.from.id, catUrl,Markup.inlineKeyboard([
        Markup.button.callback("Змінити інетрвал", "changeInterval")
    ]))
}