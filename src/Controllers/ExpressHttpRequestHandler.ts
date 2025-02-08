import type { Request, RequestHandler, Response } from 'express';
import { createGeneralFailureResponse } from './ResponseHelper';
import { Logger } from "../Utils/Logger/Logger";
import { isType } from '../Utils/TypeHelper';

export type ExpressHttpRequestHandler = (
    fn: (req: Request, res: Response) => Promise<void> | void
) => RequestHandler;

export const ExtendedExpressHttpRequestHandler: ExpressHttpRequestHandler = fn => async (req, res, next) => {
    try {
        await fn(req, res);
    } catch (error) {
        // define general error catcher (for http requests)

        if (typeof error.message !== "undefined"){
            Logger.error(error.message);
        } else if (isType<string>(error)) {
            Logger.error(error);
        } else {
            console.log(error);
        }
        
        var response = createGeneralFailureResponse(error.message);
        
        res.status(500).json(response);

        //next(error);
    }
};