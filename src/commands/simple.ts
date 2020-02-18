import {Message} from "discord.js";
import {Command, CommandMessage, CommandoClient} from "discord.js-commando";
import t from "../i18n";
import groups from "../groups";

class Simple extends Command {
    constructor(client: CommandoClient) {
        super(client, {
            description: "Prompts for a day of the week using reactions.",
            group: groups.rp,
            memberName: "simple",
            name: "simple",
        });
    }

    public async run(message: CommandMessage): Promise<Message> {
        const response = await message.channel.send(t.whichDay) as Message;
        await response.react(t.emoteD1);
        await response.react(t.emoteD2);
        await response.react(t.emoteD3);
        await response.react(t.emoteD4);
        await response.react(t.emoteD5);
        await response.react(t.emoteD6);
        await response.react(t.emoteD7);
        await response.react(t.emoteNo);
        return response;
    }
}

export default Simple;
