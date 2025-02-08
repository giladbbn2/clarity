import { CreateEmployeeRequest } from "./Models/CreateEmployeeRequest";
import { UpdateEmployeeRequest } from "./Models/UpdateEmployeeRequest";

export interface IEmployeeService {
    CreateEmployee: (createEmployeeRequest: CreateEmployeeRequest) => Promise<number>,
    UpdateEmployee: (updateEmployeeRequest: UpdateEmployeeRequest) => Promise<void>,
    DeleteEmployee: (employeeId: number) => Promise<void>,
    // Employee started working (not when the record was created)
    // Employee stopped working
    // Employee clock-in
    // Employee clock-out
    // Employee set schedule
}