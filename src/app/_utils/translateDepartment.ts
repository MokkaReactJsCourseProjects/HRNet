import Department from "../_types/department";

export default function translateDepartment(department: Department) {
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
