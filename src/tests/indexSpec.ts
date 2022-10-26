import app from '../index';
import supertest from 'supertest';

//create a request object
const request = supertest(app);
//test Endpoint
describe('Testing the end point', () => {
  it('It should return 200', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
  it('It should return 404', async () => {
    const response = await request.get('/files/index');
    expect(response.status).toBe(404);
  });
});
