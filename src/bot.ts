import {Client, Message} from "discord.js";
import priv from "./private.json";

const client = new Client();

client.on("ready", () => {
    process.stdout.write("ready!");
});

client.on("message", async (message) => {
    if (message.content === "/simple") {
        const response = await message.channel.send("Quel jour ?") as Message;
        await response.react("🇱");
        await response.react("🇦");
        await response.react("🇪");
        await response.react("🇯");
        await response.react("🇻");
        await response.react("🇸");
        await response.react("🇩");
        await response.react("🚫");
    }
});

client.login(priv.TOKEN);
