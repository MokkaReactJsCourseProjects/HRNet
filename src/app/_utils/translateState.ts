//Imports
import State from "../_types/state";

/**
 * Translates the given State enum value into a human-readable string representation.
 *
 * @function
 * @param {State} state - The state enum value to be translated.
 * @returns {string} The string representation of the given state.
 */
export function translateState(state: State): string {
    switch (state) {
        case State.alabama:
            return "Alabama";
        case State.alaska:
            return "Alaska";
        case State.americanSamoa:
            return "American Samoa";
        case State.arizona:
            return "Arizona";
        case State.arkansas:
            return "Arkansas";
        case State.california:
            return "California";
        case State.colorado:
            return "Colorado";
        case State.connecticut:
            return "Connecticut";
        case State.delaware:
            return "Delaware";
        case State.columbia:
            return "District Of Columbia";
        case State.micronesia:
            return "Federated States Of Micronesia";
        case State.florida:
            return "Florida";
        case State.georgia:
            return "Georgia";
        case State.guam:
            return "Guam";
        case State.hawaii:
            return "Hawaii";
        case State.idaho:
            return "Idaho";
        case State.illinois:
            return "Illinois";
        case State.indiana:
            return "Indiana";
        case State.iowa:
            return "Iowa";
        case State.kansas:
            return "Kansas";
        case State.kentucky:
            return "Kentucky";
        case State.louisiana:
            return "Louisiana";
        case State.maine:
            return "Maine";
        case State.marshallIslands:
            return "Marshall Islands";
        case State.maryland:
            return "Maryland";
        case State.massachusetts:
            return "Massachusetts";
        case State.michigan:
            return "Michigan";
        case State.minnesota:
            return "Minnesota";
        case State.mississippi:
            return "Mississippi";
        case State.missouri:
            return "Missouri";
        case State.montana:
            return "Montana";
        case State.nebraska:
            return "Nebraska";
        case State.nevada:
            return "Nevada";
        case State.newHampshire:
            return "New Hampshire";
        case State.newJersey:
            return "New Jersey";
        case State.newMexico:
            return "New Mexico";
        case State.newYork:
            return "New York";
        case State.northCarolina:
            return "North Carolina";
        case State.northDakota:
            return "North Dakota";
        case State.northernMarianaIslands:
            return "Northern Mariana Islands";
        case State.ohio:
            return "Ohio";
        case State.oklahoma:
            return "Oklahoma";
        case State.oregon:
            return "Oregon";
        case State.palau:
            return "Palau";
        case State.pennsylvania:
            return "Pennsylvania";
        case State.puertoRico:
            return "Puerto Rico";
        case State.rhodeIsland:
            return "Rhode Island";
        case State.southCarolina:
            return "South Carolina";
        case State.southDakota:
            return "South Dakota";
        case State.tennessee:
            return "Tennessee";
        case State.texas:
            return "Texas";
        case State.utah:
            return "Utah";
        case State.vermont:
            return "Vermont";
        case State.virginIslands:
            return "Virgin Islands";
        case State.virginia:
            return "Virginia";
        case State.washington:
            return "Washington";
        case State.westVirginia:
            return "WestVirginia";
        case State.wisconsin:
            return "Wisconsin";
        case State.wyoming:
            return "Wyoming";
        default:
            return "?";
    }
}

/**
 * Translates the given State enum value into its corresponding abbreviated form.
 *
 * @function
 * @param {State} state - The state enum value to be translated.
 * @returns {string} The abbreviated form of the given state.
 */
export function translateStateShort(state: State): string {
    switch (state) {
        case State.alabama:
            return "AL";
        case State.alaska:
            return "AK";
        case State.americanSamoa:
            return "AS";
        case State.arizona:
            return "AZ";
        case State.arkansas:
            return "AR";
        case State.california:
            return "CA";
        case State.colorado:
            return "CO";
        case State.connecticut:
            return "CT";
        case State.delaware:
            return "DE";
        case State.columbia:
            return "DC";
        case State.micronesia:
            return "FM";
        case State.florida:
            return "FL";
        case State.georgia:
            return "GA";
        case State.guam:
            return "GU";
        case State.hawaii:
            return "HI";
        case State.idaho:
            return "ID";
        case State.illinois:
            return "IL";
        case State.indiana:
            return "IN";
        case State.iowa:
            return "IA";
        case State.kansas:
            return "KS";
        case State.kentucky:
            return "KY";
        case State.louisiana:
            return "LA";
        case State.maine:
            return "ME";
        case State.marshallIslands:
            return "MH";
        case State.maryland:
            return "MD";
        case State.massachusetts:
            return "MA";
        case State.michigan:
            return "MI";
        case State.minnesota:
            return "MN";
        case State.mississippi:
            return "MS";
        case State.missouri:
            return "MO";
        case State.montana:
            return "MT";
        case State.nebraska:
            return "NE";
        case State.nevada:
            return "NV";
        case State.newHampshire:
            return "NH";
        case State.newJersey:
            return "NJ";
        case State.newMexico:
            return "NM";
        case State.newYork:
            return "NY";
        case State.northCarolina:
            return "NC";
        case State.northDakota:
            return "ND";
        case State.northernMarianaIslands:
            return "MP";
        case State.ohio:
            return "OH";
        case State.oklahoma:
            return "OK";
        case State.oregon:
            return "OR";
        case State.palau:
            return "PW";
        case State.pennsylvania:
            return "PA";
        case State.puertoRico:
            return "PR";
        case State.rhodeIsland:
            return "RI";
        case State.southCarolina:
            return "SC";
        case State.southDakota:
            return "SD";
        case State.tennessee:
            return "TN";
        case State.texas:
            return "TX";
        case State.utah:
            return "UT";
        case State.vermont:
            return "VT";
        case State.virginIslands:
            return "VI";
        case State.virginia:
            return "VA";
        case State.washington:
            return "WA";
        case State.westVirginia:
            return "WV";
        case State.wisconsin:
            return "WI";
        case State.wyoming:
            return "WY";
        default:
            return "?";
    }
}
