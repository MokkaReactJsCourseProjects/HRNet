import Employee from "@/app/_types/employee";
import {
    translateDate,
    translateDepartment,
    translateState,
    translateStateShort,
} from "@/app/_utils";

function checkIfInfoIsSearched(info: string, word: string) {
    return info.toLowerCase().includes(word.toLowerCase());
}

export default function filterEmployees(
    employees: Employee[],
    search: string,
    searchWords: string[]
): Employee[] {
    return employees.filter((employee: Employee) => {
        if (search === "") {
            return true;
        }
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
