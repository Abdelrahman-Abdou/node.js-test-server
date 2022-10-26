import { Router, Request, Response } from 'express';
import path from 'path';
import validator from '../../validator/validator';
import resize from '../../Utils/Sharp';
const router = Router();

router.get('/', validator, async (req: Request, res: Response) => {
  const Name = req.query.name as string;
  const location = path.resolve('./') + `/assets/${Name}.jpg`;
  const width = req.query.width as unknown;
  const height = req.query.height as unknown;
  const resizedFile = await resize(
    location,
    width as number,
    height as number,
    Name
  );
  res.sendFile(resizedFile);
});

export default router;
