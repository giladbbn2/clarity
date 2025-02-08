import { EmployeePositions } from "../../../Entities/EmployeePositions";

export interface CreateEmployeeRequest {
    Firstname: string,
    Lastname: string,
    Address: string,
    City: string,
    EmployeePosition: EmployeePositions,
}