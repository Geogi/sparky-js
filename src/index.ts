import {CommandoClient, SQLiteProvider} from "discord.js-commando";
import * as path from "path";
import * as sqlite from "sqlite";
import "sqlite/main";
import commands from "./commands";
import * as dotenv from "dotenv";
import groups from "./groups";

dotenv.config();

const client = new CommandoClient({
    owner: "190183362294579211",
});

client.setProvider(
    sqlite.open(path.join(__dirname, "settings.sqlite3"))
        .then((db) => new SQLiteProvider(db))
        .then())
    .then();

client.registry
    .registerDefaults()
    .registerGroups([
        [groups.rp, "Real-life Roleplay"],
    ])
    .registerCommands(commands(client));

client.login(process.env.DISCORD_TOKEN).then();
