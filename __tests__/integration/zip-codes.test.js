const supertest = require('supertest');
const dotenv = require('dotenv');

// Cargamos las variables de entorno
dotenv.config();

const app = require('../../app');

const request = supertest(app);

describe('zip-codes::endpoints', () => {
  it('should get / responds with status 200', async () => {
    expect.hasAssertions();

    const response = await request.get('/zip-codes');

    expect(response.status).toBe(200);
  });

  it('should get /:zipCode responds with status 200', async () => {
    expect.hasAssertions();
    const zipCode = 71246;

    const response = await request.get(`/zip-codes/${zipCode}`);

    expect(response.status).toBe(200);
  });

  it('should get /:zipCode respond with error 404 if zipCode not found', async () => {
    expect.hasAssertions();
    const zipCode = 71246;

    const response = await request.get(`/zip-codes/${zipCode}`);

    expect(response.status).toBe(404);
  });
});
