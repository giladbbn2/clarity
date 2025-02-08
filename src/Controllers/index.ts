import express from 'express';
import { EmployeeController } from "./Employees/EmployeeController";

export const router = express.Router();

router.use(EmployeeController);