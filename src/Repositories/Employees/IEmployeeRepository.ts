import { Employee } from "../../Entities/Employee";
import { CreateEmployeeRequest } from "./Models/CreateEmployeeRequest";
import { UpdateEmployeeRequest } from "./Models/UpdateEmployeeRequest";

export interface IEmployeeRepository {
    GetEmployee: (employeeId: number) => Promise<Employee | null>,
    GetEmployees: (skip: number, take: number) => Promise<Array<Employee>>,
    CreateEmployee: (createEmployeeRequest: CreateEmployeeRequest) => Promise<number>,
    UpdateEmployee: (updateEmployeeRequest: UpdateEmployeeRequest) => Promise<void>,
    DeleteEmployee: (employeeId: number) => Promise<void>,
}