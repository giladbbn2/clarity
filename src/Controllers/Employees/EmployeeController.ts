import { Router } from 'express';
import { ExtendedExpressHttpRequestHandler } from '../ExpressHttpRequestHandler';
import { EmployeeRepository } from '../../Repositories/Employees';
import * as Validators from '../Validators';
import { createGeneralSuccessResponse, createGeneralSuccessPagedReponse } from '../ResponseHelper';
import { CreateEmployeeRequest } from '../../Repositories/Employees/Models/CreateEmployeeRequest';
import { EmployeeDto, initEmployeeDto } from './DTOs/EmployeeDto';
import { CreateEmployeeResponseDto } from './DTOs/CreateEmployeeResponseDto';
import { EmployeePositions } from '../../Entities/EmployeePositions';
import { UpdateEmployeeRequest } from '../../Repositories/Employees/Models/UpdateEmployeeRequest';
import { isType } from '../../Utils/TypeHelper';

export const EmployeeController = Router();

EmployeeController.get("/internal/v1/employee/:employeeId", ExtendedExpressHttpRequestHandler(async (req, res) => {
    const employeeId = Validators.ToNonNegativeNumber(req.params.employeeId);
    
    const employee = await EmployeeRepository.GetEmployee(employeeId);
    
    if (employee !== null){
        const employeeDto = initEmployeeDto(employee);

        const response = createGeneralSuccessResponse(employeeDto);
        
        res.json(response);
    } else {
        const response = createGeneralSuccessResponse(null);

        res.json(response);
    }
}));

EmployeeController.get("/internal/v1/employees", ExtendedExpressHttpRequestHandler(async (req, res) => {
    let skip = 0;
    let take = 1;
    
    if (typeof req.query.skip !== "undefined" &&
        isType<string>(req.query.skip)
    ){
        skip = Validators.ToNonNegativeNumber(req.query.skip);
    }

    if (typeof req.query.take !== "undefined" &&
        isType<string>(req.query.take)
    ){
        take = Validators.ToNonNegativeNumber(req.query.take);
    }

    // other filters

    var employees = await EmployeeRepository.GetEmployees(skip, take);

    const employeesDto = new Array<EmployeeDto>();

    for (const employee of employees){
        const employeeDto = initEmployeeDto(employee);

        employeesDto.push(employeeDto);
    }

    const response = createGeneralSuccessResponse(employeesDto);
        
    res.json(response);
}));

EmployeeController.post("/internal/v1/employee", ExtendedExpressHttpRequestHandler(async (req, res) => {
    if (typeof req.body.Firstname === "undefined"){
        throw new Error("firstname is not defined");
    }

    if (typeof req.body.Lastname === "undefined"){
        throw new Error("lastname is not defined");
    }

    if (typeof req.body.Address === "undefined"){
        throw new Error("address is not defined");
    }
    
    if (typeof req.body.City === "undefined"){
        throw new Error("city is not defined");
    }

    if (typeof req.body.EmployeePositionId === "undefined"){
        throw new Error("employeePositionId is not defined");
    }

    const employeePositionId = Validators.ToNonNegativeNumber(req.body.EmployeePositionId);

    if (typeof EmployeePositions[employeePositionId] === "undefined"){
        throw new Error("employeePositionId is defined incorrectly");
    }

    var createEmployeeRequest : CreateEmployeeRequest = {
        Created: new Date(),
        Firstname: req.body.firstname,
        Lastname: req.body.lastname,
        Address: req.body.address,
        City: req.body.city,
        EmployeePosition: employeePositionId,
    };

    // TODO: move to EmployeeService
    const employeeId = await EmployeeRepository.CreateEmployee(createEmployeeRequest);

    const createEmployeeResponseDto : CreateEmployeeResponseDto = {
        EmployeeId: employeeId,
    };

    const response = createGeneralSuccessResponse(createEmployeeResponseDto);
    
    res.status(201).json(response);
}));

EmployeeController.put("/internal/v1/employee", ExtendedExpressHttpRequestHandler(async (req, res) => {
    if (typeof req.body.employeeId === "undefined"){
        throw new Error("employeeId is not defined");
    }
    
    if (typeof req.body.firstname === "undefined"){
        throw new Error("firstname is not defined");
    }

    if (typeof req.body.lastname === "undefined"){
        throw new Error("lastname is not defined");
    }

    if (typeof req.body.address === "undefined"){
        throw new Error("address is not defined");
    }
    
    if (typeof req.body.city === "undefined"){
        throw new Error("city is not defined");
    }

    if (typeof req.body.employeePositionId === "undefined"){
        throw new Error("employeePositionId is not defined");
    }

    const employeeId = Validators.ToNonNegativeNumber(req.body.employeeId);
    const employeePositionId = Validators.ToNonNegativeNumber(req.body.employeePositionId);

    if (typeof EmployeePositions[employeePositionId] === "undefined"){
        throw new Error("employeePositionId is defined incorrectly");
    }

    var updateEmployeeRequest : UpdateEmployeeRequest = {
        EmployeeId: employeeId,
        LastUpdated: new Date(),
        Firstname: req.body.firstname,
        Lastname: req.body.lastname,
        Address: req.body.address,
        City: req.body.city,
        EmployeePosition: employeePositionId,
    };

    // TODO: move to EmployeeService
    await EmployeeRepository.UpdateEmployee(updateEmployeeRequest);

    res.status(204).send();
}));

EmployeeController.delete("/internal/v1/employee/:employeeId", ExtendedExpressHttpRequestHandler(async (req, res) => {
    const employeeId = Validators.ToNonNegativeNumber(req.params.employeeId);
    
    // TODO: move to EmployeeService
    await EmployeeRepository.DeleteEmployee(employeeId);

    res.status(204).send();
}));