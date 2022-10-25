import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
const resize = async (
  photo: string,
  width = 100,
  height = 100,
  name = 'photo'
)  => {
  try {
    const newLocation =
      path.resolve('./') + `/assets/thumbnails/${name}-${width}x${height}.jpg`;
    if (fs.existsSync(newLocation)) {
      return newLocation;
    }

     await sharp(photo)
      .resize(+width, +height)
      .toFile(newLocation);
      return newLocation 
  } catch (error) {
    return "error";
  }
};

export default resize;
