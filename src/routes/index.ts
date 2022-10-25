import { Router, Request, Response } from 'express';
import leads_routes from './api/leads';
import path from "path"


const routes = Router();

routes.get('/', (_req: Request, res: Response) => {
  res.send(path.resolve('./'));
});
routes.use('/leads', leads_routes);



export default routes;
