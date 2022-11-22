import logger from '#commons/logger';
import express from 'express';
import setupMiddlewares from '#middlewares/setup';

logger.info('starting the app');

// Fetch PORT env variable or use 8080 as default
const PORT = parseInt(parseInt(process.env.PORT)) || 8080;

// express app instance
const app = express();

// configure the middlewares
setupMiddlewares(app).then(() => {
  app.listen(PORT, () => {
    logger.info('warehouse-service is up and running PORT[%s]', PORT);
  });
});
