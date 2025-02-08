import { Router } from 'express';
import { ExtendedExpressHttpRequestHandler } from '../ExpressHttpRequestHandler';

export const HealthController = Router();

HealthController.get("/health/live", ExtendedExpressHttpRequestHandler(async (req, res) => {
    // check db and cache liveness
    
    res.status(200).send();
}));

HealthController.get("/health/ready", ExtendedExpressHttpRequestHandler(async (req, res) => {
    // make sure we are ready to receive requests

    res.status(200).send();
}));

HealthController.get("/health/startup", ExtendedExpressHttpRequestHandler(async (req, res) => {
    // perform startup tasks and after they are finished return 200

    res.status(200).send();
}));