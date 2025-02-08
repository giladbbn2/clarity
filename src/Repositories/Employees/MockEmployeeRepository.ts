import { Employee } from "../../Entities/Employee";
import { EmployeePositions } from "../../Entities/EmployeePositions";
import { IEmployeeRepository } from "./IEmployeeRepository";
import { CreateEmployeeRequest } from "./Models/CreateEmployeeRequest";
import { UpdateEmployeeRequest } from "./Models/UpdateEmployeeRequest";

let employees = new Array<Employee>();

let employee : Employee = {
    EmployeeId: 0,
    Created: new Date(),
    LastUpdated: null,
    Firstname: "Gilad",
    Lastname: "Babin",
    Address: "address1",
    City: "city1",
    EmployeePosition: EmployeePositions.Barista,
};

employees.push(employee);

const GetEmployee: (employeeId: number) => Promise<Employee | null> = (employeeId) => {
    return new Promise<Employee>((resolve, reject) => {
        let employee : Employee | null = null;
        
        for (let i = 0; i < employees.length; i++){
            if (employees[i].EmployeeId === employeeId){
                employee = {
                    ...employees[i]
                };
                
                break;
            }
        }
        
        resolve(employee);
    });
};

const GetEmployees: (skip: number, take: number) => Promise<Array<Employee>> = (skip, take) => {
    return new Promise<Array<Employee>>((resolve, reject) => {
        if (skip < 0 ||
            take <= 0
        ) {
            reject(new Error("skip and/or take are not defined correctly"));
        }

        const results = new Array<Employee>();

        for (let i = skip; i < take; i++){
            if (typeof employees[i] === "undefined"){
                break;
            }

            results.push(employees[i]);
        }

        resolve(results);
    });
};

const CreateEmployee: (createEmployeeRequest: CreateEmployeeRequest) => Promise<number> = (createEmployeeRequest) => {
    return new Promise<number>((resolve, reject) => {
        const employeeId = employees[employees.length - 1].EmployeeId + 1;

        const employee : Employee = {
            EmployeeId: employeeId,
            Created: createEmployeeRequest.Created,
            LastUpdated: null,
            Firstname: createEmployeeRequest.Firstname,
            Lastname: createEmployeeRequest.Lastname,
            Address: createEmployeeRequest.Address,
            City: createEmployeeRequest.City,
            EmployeePosition: createEmployeeRequest.EmployeePosition,
        }

        employees.push(employee);

        resolve(employeeId);
    });
};

const UpdateEmployee: (updateEmployeeRequest: UpdateEmployeeRequest) => Promise<void> = (updateEmployeeRequest) => {
    return new Promise<void>((resolve, reject) => {
        let isFound = false;

        for (let i = 0; i < employees.length; i++){
            const employee = employees[i];

            if (employee.EmployeeId === updateEmployeeRequest.EmployeeId){
                employee.LastUpdated = updateEmployeeRequest.LastUpdated;
                employee.Firstname = updateEmployeeRequest.Firstname;
                employee.Lastname = updateEmployeeRequest.Lastname;
                employee.Address = updateEmployeeRequest.Address;
                employee.City = updateEmployeeRequest.City;
                employee.EmployeePosition = updateEmployeeRequest.EmployeePosition;

                isFound = true;

                break;
            }
        }

        if (!isFound){
            reject(new Error("employee not found"));

            return;
        }

        resolve();
    });
};

const DeleteEmployee: (employeeId: number) => Promise<void> = (employeeId) => {
    return new Promise<void>((resolve, reject) => {
        const newEmployees = new Array<Employee>;

        let isFound = false;

        for (let i = 0; i < employees.length; i++){
            const employee = employees[i];

            if (employee.EmployeeId === employeeId){
                isFound = true;
            } else {
                newEmployees.push(employee);
            }
        }

        if (!isFound){
            reject(new Error("employee not found"));

            return;
        }

        employees = newEmployees;

        resolve();
    });
};

export const MockEmployeeRepository : IEmployeeRepository = {
    GetEmployee,
    GetEmployees,
    CreateEmployee,
    UpdateEmployee,
    DeleteEmployee,
};