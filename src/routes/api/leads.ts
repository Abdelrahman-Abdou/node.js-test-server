import { Router, Request, Response } from 'express';
import leads from '../../Utils/_DATA';
import path from 'path';
import { existsSync } from 'fs';
import resize from '../../Utils/Sharp';
const leads_routes = Router();

leads_routes.get('/', async (req: Request, res: Response) => {
  const name = req.query.name as string;
  const imgLocation = path.resolve('./') + `/assets/${name}.jpg`;

  const lead = leads.includes(name);
  if (name == undefined) {
    return res.status(400).send('Please, enter query parameter (name)');
  }
  if (lead == false) {
    return res.status(404).send('file is not exist');
  }
  if (existsSync(imgLocation) == false) {
    return res
      .status(404)

      .send('file is not exist');
  }
  const width = req.query.width as unknown;
  const height = req.query.height as unknown;
  const resizedFile = await resize(
    imgLocation,
    width as number,
    height as number,
    name
  );
  res.sendFile(resizedFile);
});

export default leads_routes;
