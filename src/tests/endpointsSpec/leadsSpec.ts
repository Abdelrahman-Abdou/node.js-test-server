import resize from '../../Utils/Sharp';
// import supertest from 'supertest';
import path from 'path';

// const request = supertest(resize);

describe('Testing the image processing', () => {
  const photo = path.resolve('./') + `/assets/lab.jpg`;
  const width = 300;
  const height = 300;
  const name = 'abl';

  it('It should return a photo location in E:\node.js-test-server/assets/thumbnails/lab-300x300.jpg with height 300 and width= 300', async () => {
    const response = await resize(photo, width, height, name);
    expect(response).toEqual(
      `${path.resolve('./')}/assets/thumbnails/abl-300x300.jpg`
    );
  });
});
