import express, { Application } from 'express';
import routes from './routes';

const app:Application = express();
const port = 3000;

app.use(routes);
//define a route handler for the default home page
app.get('/',(req,res)=>{
  res.send('hello world')
})
app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
