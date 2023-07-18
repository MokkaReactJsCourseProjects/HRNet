import Employee from "@/app/_types/employee";

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
                checkIfInfoIsSearched(employee.birthdate, word) ||
                checkIfInfoIsSearched(employee.startDate, word) ||
                checkIfInfoIsSearched(employee.street, word) ||
                checkIfInfoIsSearched(employee.city, word) ||
                checkIfInfoIsSearched(String(employee.state), word) ||
                checkIfInfoIsSearched(employee.zipCode, word) ||
                checkIfInfoIsSearched(String(employee.department), word)
            ) {
                return true;
            }
        }
        return false;
    });
}
