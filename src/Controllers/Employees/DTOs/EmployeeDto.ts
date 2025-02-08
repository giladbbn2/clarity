import { Employee } from "../../../Entities/Employee";
import { EmployeePositions } from "../../../Entities/EmployeePositions";

export interface EmployeeDto {
    EmployeeId: number;
    Created: Date;
    LastUpdated: Date | null;
    Firstname: string;
    Lastname: string;
    Address: string;
    City: string;
    EmployeePositionId: number;
}

export const initEmployeeDto: (employee: Employee) => EmployeeDto = (employee) => {
    const employeeDto : EmployeeDto = {
        EmployeeId: employee.EmployeeId,
        Created: employee.Created,
        LastUpdated: employee.LastUpdated,
        Firstname: employee.Firstname,
        Lastname: employee.Lastname,
        Address: employee.Address,
        City: employee.City,
        EmployeePositionId: employee.EmployeePosition,
    };

    return employeeDto;
};