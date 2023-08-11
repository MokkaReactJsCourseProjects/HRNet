//Imports
import Employee from "@/app/_types/employee";
import {
    translateDate,
    translateDepartment,
    translateState,
    translateStateShort,
} from "@/app/_utils";

/**
 * Checks if a given word is present within a provided info string.
 *
 * @function
 * @param {string} info - The string in which to search.
 * @param {string} word - The word to search for within the info string.
 * @returns {boolean} Returns `true` if the word is found in the info string, otherwise returns `false`.
 */
function checkIfInfoIsSearched(info: string, word: string): boolean {
    return info.toLowerCase().includes(word.toLowerCase());
}

/**
 * Filters a list of employees based on search criteria.
 *
 * @function
 * @param {Employee[]} employees - The original list of employees to filter.
 * @param {string[]} searchWords - An array of words derived from the search term.
 * @returns {Employee[]} Returns a filtered list of employees based on the search criteria.
 */
export default function filterEmployees(
    employees: Employee[],
    searchWords: string[]
): Employee[] {
    if (searchWords.length === 0) {
        return employees;
    }
    return employees.filter((employee: Employee) => {
        for (const word of searchWords) {
            if (
                checkIfInfoIsSearched(employee.firstName, word) ||
                checkIfInfoIsSearched(employee.lastName, word) ||
                checkIfInfoIsSearched(
                    translateDate(new Date(employee.birthdate)),
                    word
                ) ||
                checkIfInfoIsSearched(
                    translateDate(new Date(employee.startDate)),
                    word
                ) ||
                checkIfInfoIsSearched(employee.street, word) ||
                checkIfInfoIsSearched(employee.city, word) ||
                checkIfInfoIsSearched(translateState(employee.state), word) ||
                checkIfInfoIsSearched(
                    translateStateShort(employee.state),
                    word
                ) ||
                checkIfInfoIsSearched(employee.zipCode, word) ||
                checkIfInfoIsSearched(
                    translateDepartment(employee.department),
                    word
                )
            ) {
                return true;
            }
        }
        return false;
    });
}
