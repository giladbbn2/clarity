import { EmployeePositions } from "./EmployeePositions";

export interface Employee {
    EmployeeId: number,
    Created: Date,
    LastUpdated: Date | null,
    Firstname: string,
    Lastname: string,
    Address: string,
    City: string,
    EmployeePosition: EmployeePositions,
}