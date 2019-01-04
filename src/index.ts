import {Client, Message} from "discord.js";
import t from "./i18n";
import logger from "./logger";
import privateConfig from "./private.json";

const client = new Client();

client.on("ready", () => {
    logger.info("ready!");
});

client.on("message", async (message): Promise<void> => {
    if (message.content === "/simple") {
        const response = await message.channel.send(t.whichDay) as Message;
        await response.react(t.emoteD1);
        await response.react(t.emoteD2);
        await response.react(t.emoteD3);
        await response.react(t.emoteD4);
        await response.react(t.emoteD5);
        await response.react(t.emoteD6);
        await response.react(t.emoteD7);
        await response.react(t.emoteNo);
    }
});

client.login(privateConfig.TOKEN).catch((r) => {
    logger.error(r);
});
