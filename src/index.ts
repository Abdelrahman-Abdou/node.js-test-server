import express, { Application } from 'express';
import routes from './routes';

const app: Application = express();
const port = 3000;

app.use(routes);

app.listen(port, ():void => {
  console.log(`server started at localhost:${port}`);
});

export default app;
