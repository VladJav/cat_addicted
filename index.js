import {Telegraf} from "telegraf";
import {sendCatPhoto} from "./Utils/sendCatPhoto.js";
import {HOUR, MINUTE} from "./Constants/time.js";
import {interval, setCatInterval} from "./Utils/catInterval.js";
import {inlineKeyboard} from "./Constants/keyboards.js";

const bot = new Telegraf("5981905154:AAHfM-hRy3dbLAe-_rhXZhwAN9CsCaSNKOY")

bot.start( async (ctx)=>{
    await ctx.telegram.sendMessage(ctx.from.id,"Інтервал: ", inlineKeyboard)
})

bot.action('choice1', (ctx)=>{
    sendCatPhoto(ctx)
    setCatInterval(ctx, MINUTE)
})
bot.action('choice2',  (ctx)=>{
    sendCatPhoto(ctx)
    setCatInterval(ctx,MINUTE * 10)
})
bot.action('choice3',  (ctx)=>{
    sendCatPhoto(ctx)
    setCatInterval(ctx,MINUTE * 30)
})
bot.action('choice4',  (ctx)=>{
    sendCatPhoto(ctx)
    setCatInterval(ctx,HOUR)
})
bot.action('choice5',  (ctx)=>{
    sendCatPhoto(ctx)
    setCatInterval(ctx,HOUR * 2)
})
bot.action('choice6',  (ctx)=>{
    sendCatPhoto(ctx)
    setCatInterval(ctx,HOUR * 4)
})
bot.action('choice7',  (ctx)=>{
    sendCatPhoto(ctx)
    setCatInterval(ctx,HOUR * 6)
})
bot.action('choice8',  (ctx)=>{
    sendCatPhoto(ctx)
    setCatInterval(ctx,HOUR * 12)
})
bot.action('choice9',  (ctx)=>{
    sendCatPhoto(ctx)
    setCatInterval(ctx,HOUR * 24)
})
bot.action("changeInterval", async (ctx)=>{
    clearInterval(interval)
    await ctx.telegram.sendMessage(ctx.from.id,"Інтервал: ", inlineKeyboard)
})
bot.catch((err, ctx) => {
    console.log(`Ooops, encountered an error for ${ctx.updateType}`, err)
})
bot.launch();