import { getAppConfiguration } from "../../AppConfiguration";
import { EmployeeRepository as impl } from "./EmployeeRepository";
import { MockEmployeeRepository as mock } from "./MockEmployeeRepository";
import { IEmployeeRepository } from "./IEmployeeRepository";

let repo : IEmployeeRepository;

const configuration = getAppConfiguration();

if (!configuration.Mocks.EmployeeRepository){
    repo = impl;
} else {
    repo = mock;
}

export const EmployeeRepository : IEmployeeRepository = repo;