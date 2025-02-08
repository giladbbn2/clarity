import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const toBoolean : (val : string | null) => boolean = (val) => {
    if (val === null) {
        return false;
    }

    if (val === "true" || val === "1") {
        return true;
    }

    return false;
};

const configuration = {
    ServiceName: "Employee Service",
    ServiceDescription: "Service for managing the restaurant's employees",
    ServiceVersion: "1.0.0",
    InstanceId: crypto.randomUUID().toString().replace(/-/g, ""),
    Environment:  process.env.ENV,
    ApplicationPort: process.env.APPLICATION_PORT || 3000,
    LoggerMinLevel: process.env.LOGGER_MIN_LEVEL || 'debug',
    Mocks: {
        EmployeeRepository: toBoolean(process.env.MOCK_EMPLOYEE_REPO)
    }
};

export const getAppConfiguration = () => {
    return {
        ...configuration
    };
};