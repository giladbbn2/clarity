import { EmployeePositions } from "../../../Entities/EmployeePositions";

export interface CreateEmployeeRequest {
    Created: Date,
    Firstname: string,
    Lastname: string,
    Address: string,
    City: string,
    EmployeePosition: EmployeePositions,
}