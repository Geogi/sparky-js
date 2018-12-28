import {Client, Message} from "discord.js";
import i18n from "./i18n";
import privateConfig from "./private.json";

const client = new Client();

client.on("ready", () => {
    process.stdout.write("ready!");
});

client.on("message", async (message): Promise<void> => {
    const t = await i18n;
    if (message.content === "/simple") {
        const response = await message.channel.send(t("whichDay")) as Message;
        await response.react(t("emoteD1"));
        await response.react(t("emoteD2"));
        await response.react(t("emoteD3"));
        await response.react(t("emoteD4"));
        await response.react(t("emoteD5"));
        await response.react(t("emoteD6"));
        await response.react(t("emoteD7"));
        await response.react(t("emoteNo"));
    }
});

client.login(privateConfig.TOKEN).then();
