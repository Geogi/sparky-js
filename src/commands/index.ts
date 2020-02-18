import {CommandoClient} from "discord.js-commando";
import Simple from "./simple";
import Terminate from "./terminate";

const commands = (client: CommandoClient) => [
    Simple,
    Terminate,
].map((c) => new c(client));

export default commands;
