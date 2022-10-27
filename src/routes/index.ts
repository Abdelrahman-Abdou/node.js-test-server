import { Router, Request, Response } from 'express';
import router from './api/files';
import path from 'path';

const routes = Router();

routes.get('/', (_req: Request, res: Response) => {
  res.send(path.resolve('./'));
});
routes.use('/nature', router);

export default routes;