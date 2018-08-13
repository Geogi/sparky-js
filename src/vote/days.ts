export {
    Day,
    Glob,
    Placeholder,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
    always,
    never,
    rest,
};

import * as P from "parsimmon";

enum Day {
    Monday = "lundi",
    Tuesday = "mardi",
    Wednesday = "mercredi",
    Thursday = "jeudi",
    Friday = "vendredi",
    Saturday = "samedi",
    Sunday = "dimanche",
}

enum Glob {
    Always = "toujours",
    Never = "jamais",
}

enum Placeholder {
    Rest = "reste",
}

const monday = () => P.alt(
    P.string("lundi"),
    P.string("l"),
).map(() => Day.Monday);

const tuesday = () => P.alt(
    P.string("mardi"),
    P.string("ma"),
    P.string("a"),
).map(() => Day.Tuesday);

const wednesday = () => P.alt(
    P.string("mercredi"),
    P.string("me"),
    P.string("e"),
).map(() => Day.Wednesday);

const thursday = () => P.alt(
    P.string("jeudi"),
    P.string("j"),
).map(() => Day.Thursday);

const friday = () => P.alt(
    P.string("vendredi"),
    P.string("v"),
).map(() => Day.Friday);

const saturday = () => P.alt(
    P.string("samedi"),
    P.string("s"),
).map(() => Day.Saturday);

const sunday = () => P.alt(
    P.string("dimanche"),
    P.string("d"),
).map(() => Day.Sunday);

const always = () => P.string("toujours").map(() => Glob.Always);
const never = () => P.string("jamais").map(() => Glob.Never);
const rest = () => P.string("reste").map(() => Placeholder.Rest);
