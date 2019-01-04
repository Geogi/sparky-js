import {CommandoClient, SQLiteProvider} from "discord.js-commando";
import * as path from "path";
import * as sqlite from "sqlite";
import "sqlite/main";
import commands from "./commands";
import logger from "./logger";
import privateConfig from "./private.json";

const client = new CommandoClient({
    owner: "190183362294579211",
});

client.setProvider(
    sqlite.open(path.join(__dirname, "settings.sqlite3"))
        .then((db) => new SQLiteProvider(db))
        .then(null))
    .then(null);

client.registry
    .registerDefaults()
    .registerGroups([
        ["rp", "Real-life Roleplay"],
    ])
    .registerCommands(commands(client));

client.login(privateConfig.TOKEN).catch((r) => {
    logger.error(r);
});
