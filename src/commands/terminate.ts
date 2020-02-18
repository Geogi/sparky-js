import {Command, CommandMessage, CommandoClient} from "discord.js-commando";
import groups from "../groups";

class Terminate extends Command {
    constructor(client: CommandoClient) {
        super(client, {
            description: "Terminates gracefully the bot process.",
            group: groups.util,
            memberName: "terminate",
            name: "terminate",
            ownerOnly: true,
        });
    }

    public async run(message: CommandMessage): Promise<null> {
        this.client.destroy().then();
        return null;
    }
}

export default Terminate;
