import { EmployeePositions } from "../../../Entities/EmployeePositions";

export interface UpdateEmployeeRequest {
    EmployeeId: number,
    Firstname: string,
    Lastname: string,
    Address: string,
    City: string,
    EmployeePosition: EmployeePositions,
}