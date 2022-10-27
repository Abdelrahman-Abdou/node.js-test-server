/* eslint-disable @typescript-eslint/ban-types */
import fs from 'fs';
import express from 'express';
import path from 'path';

const validator = (
  req: express.Request,
  res: express.Response,
  next: Function
): object | undefined => {
  const photos: string[] = ['abl', 'lab', 'bal', 'adport', 'ford'];
  const name = req.query.name as string;
  const imgLocation = path.resolve('./') + `/assets/${name}.jpg`;
  const photoExist = photos.includes(name);
  try {
    if (!name) {
      return res.status(400).send('Please, enter query parameter (name)');
    } else if (!photoExist) {
      return res.status(404).send('file is not exist');
    } else if (fs.existsSync(imgLocation) === false) {
      return res.status(404).send('file is not exist');
    } else {
      console.log('Request Successful');
    }
  } catch (error) {
    console.log(error);
  }
  next();
};
export default validator;
