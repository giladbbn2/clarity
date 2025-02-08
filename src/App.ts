import express from 'express';
import { router } from './Controllers';
import dotenv from 'dotenv';
import { getAppConfiguration } from './AppConfiguration';
import { Logger } from "./Utils/Logger/Logger";

dotenv.config();

const app = express();

app.use(express.json({ limit: '50mb', type: 'application/json' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/', router);

const configuration = getAppConfiguration();

// check for db connections

const server = app.listen(configuration.ApplicationPort, () => {
    Logger.info(`${configuration.ServiceName} running on localhost:${configuration.ApplicationPort}, instance Id = ${configuration.InstanceId}`);
});