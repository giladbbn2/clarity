import { getAppConfiguration } from './AppConfiguration';
import swaggerAutogen from 'swagger-autogen';

const configuration = getAppConfiguration();

const swaggerOptions = {
	openapi: '3.0.0',
	info: {
		title: configuration.ServiceName,
		version: configuration.ServiceVersion,
		description: configuration.ServiceDescription,
	},
	//host: 'localhost:3000'
};

const outputFile = '../swagger-output.json';

// include all exposed controllers
const routes = [
	"./src/Controllers/Employees/EmployeeController.ts"
];

swaggerAutogen()(outputFile, routes, swaggerOptions);