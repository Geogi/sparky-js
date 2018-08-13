export {
    parser,
};

import * as P from "parsimmon";
import {
    always,
    Day,
    friday,
    Glob,
    monday,
    never,
    Placeholder,
    rest,
    saturday,
    sunday,
    thursday,
    tuesday,
    wednesday,
} from "./days";

type Group = Day[] | Placeholder.Rest;
type Full = [Group[], Group];

const parser = P.createLanguage<{
    day: Day;
    group: Group;
    order: Group[];
    exclusion: Full;
    vote: Full | Glob;
}>({
    day: () => P.alt(
        monday(),
        tuesday(),
        wednesday(),
        thursday(),
        friday(),
        saturday(),
        sunday(),
    ),
    exclusion: (r) => P.seq(
        r.order.skip(
            P.string(">>").trim(P.optWhitespace),
        ),
        r.group,
    ),
    group: (r) => P.alt(
        P.sepBy1(
            r.day,
            P.whitespace,
        ),
        rest(),
    ),
    order: (r) => P.sepBy1(
        r.group,
        P.string(">").trim(P.optWhitespace),
    ),
    vote: (r) => P.alt(
        r.exclusion,
        always(),
        never(),
    ).trim(P.optWhitespace),
});
