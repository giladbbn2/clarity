import { Employee } from "../../Entities/Employee";
import { EmployeePositions } from "../../Entities/EmployeePositions";
import { IEmployeeRepository } from "./IEmployeeRepository";
import { CreateEmployeeRequest } from "./Models/CreateEmployeeRequest";
import { UpdateEmployeeRequest } from "./Models/UpdateEmployeeRequest";

const GetEmployee: (employeeId: number) => Promise<Employee | null> = (employeeId) => {
    return new Promise<Employee>((resolve, reject) => {
        reject(new Error("method not implemented"));
    });
};

const GetEmployees: (skip: number, take: number) => Promise<Array<Employee>> = (skip, take) => {
    return new Promise<Array<Employee>>((resolve, reject) => {
        reject(new Error("method not implemented"));
    });
};

const CreateEmployee: (createEmployeeRequest: CreateEmployeeRequest) => Promise<number> = (createEmployeeRequest) => {
    return new Promise<number>((resolve, reject) => {
        // validate request model
        // prevent sql injections (optional)
        // check if employee exists -> reject(new Error("employee already exists"));
        reject(new Error("method not implemented"));
    });
};

const UpdateEmployee: (updateEmployeeRequest: UpdateEmployeeRequest) => Promise<void> = (updateEmployeeRequest) => {
    return new Promise<void>((resolve, reject) => {
        // validate request model
        // prevent sql injections (optional)
        reject(new Error("method not implemented"));
    });
};

const DeleteEmployee: (employeeId: number) => Promise<void> = (employeeId) => {
    return new Promise<void>((resolve, reject) => {
        reject(new Error("method not implemented"));
    });
};

export const EmployeeRepository : IEmployeeRepository = {
    GetEmployee,
    GetEmployees,
    CreateEmployee,
    UpdateEmployee,
    DeleteEmployee,
};