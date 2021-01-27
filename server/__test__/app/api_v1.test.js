import req from 'supertest';
import app from '../../src/app';
import { dbConnection, dbClose } from '../utils/dbHandler';

describe('API_V1 endpoint', () => {
  beforeAll(dbConnection);
  afterAll(dbClose);

  test('Should response 200', async (done) => {
    const res = await req(app).get('/api/v1/');

    expect(res.status).toBe(200);
    done();
  });
});
