//Imports
import Department from "../_types/department";

/**
 * Translates the given Department enum value into a human-readable string representation.
 *
 * @function
 * @param {Department} department - The department enum value to be translated.
 * @returns {string} The string representation of the given department.
 */
export default function translateDepartment(department: Department): string {
    switch (department) {
        case Department.sales:
            return "Sales";
        case Department.marketing:
            return "Marketing";
        case Department.engineering:
            return "Engineering";
        case Department.humainRessources:
            return "Humain Ressources";
        case Department.legal:
            return "Legal";
    }
}
