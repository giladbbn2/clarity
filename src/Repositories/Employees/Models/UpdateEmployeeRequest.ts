import { EmployeePositions } from "../../../Entities/EmployeePositions";

export interface UpdateEmployeeRequest {
    EmployeeId: number,
    LastUpdated: Date,
    Firstname: string,
    Lastname: string,
    Address: string,
    City: string,
    EmployeePosition: EmployeePositions,
}