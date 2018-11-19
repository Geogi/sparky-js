import {Client, Message} from "discord.js";
import privateConfig from "./private.json";

const client = new Client();

client.on("ready", () => {
    process.stdout.write("ready!");
});

client.on("message", async (message): Promise<void> => {
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

client.login(privateConfig.TOKEN).then();
