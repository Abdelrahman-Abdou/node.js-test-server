import { Router, Request, Response } from 'express';
import path from 'path';
import validator from '../../validator/validator';
import resize from '../../Utils/Sharp';
const router = Router();

router.get(
  '/',
  validator,
  async (req: Request, res: Response): Promise<void> => {
    const { name, width, height } = req.query;
    const location = `${path.resolve('./')}/assets/${name}.jpg`;

    const resizedFile = await resize(
      location,
      width as unknown as number,
      height as unknown as number,
      name as unknown as string
    );
    res.sendFile(resizedFile);
  }
);

export default router;
