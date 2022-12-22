import {Markup} from "telegraf";

export const inlineKeyboard = Markup.inlineKeyboard([
    [
        Markup.button.callback("1 min", "choice1"),
        Markup.button.callback("10 min", "choice2"),
        Markup.button.callback("30 min", "choice3")
    ],
    [
        Markup.button.callback("1 hour", "choice4"),
        Markup.button.callback("2 hours", "choice5"),
        Markup.button.callback("4 hours", "choice6")
    ],
    [
        Markup.button.callback("6 hours", "choice7"),
        Markup.button.callback("12 hours", "choice8"),
        Markup.button.callback("24 hours", "choice9")
    ],
])