import i18next from "i18next";
import frFr from "./messages/fr_fr";

// noinspection SpellCheckingInspection
const m = i18next.init({
    lng: "fr",
    resources: {
        fr: {
            translation: frFr,
        },
    },
});

export default m.t;
