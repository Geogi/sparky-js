import {CommandoClient} from "discord.js-commando";
import Simple from "./simple";

const commands = (client: CommandoClient) => [
    Simple,
].map((c) => new c(client));

export default commands;
