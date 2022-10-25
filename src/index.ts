import express from 'express';
import routes from './routes';

const app = express();
const port = 3000;

app.use(routes);
//define a route handler for the default home page

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
