const request = require('supertest');
const app = require('../app');

describe('API basic endpoints', () => {
  jest.setTimeout(20000);

  test('GET /api/football/matches/today should return 200 and an array or 502 if external API fails', async () => {
    const res = await request(app).get('/api/football/matches/today');
    expect([200, 502]).toContain(res.status);
    if (res.status === 200) {
      expect(Array.isArray(res.body)).toBeTruthy();
    }
  });

  test('GET /api/football/matches/live should return 200 and an array or 502', async () => {
    const res = await request(app).get('/api/football/matches/live');
    expect([200, 502]).toContain(res.status);
    if (res.status === 200) {
      expect(Array.isArray(res.body)).toBeTruthy();
    }
  });

  test('GET /api/news/football should return 200 or 502 (news key missing)', async () => {
    const res = await request(app).get('/api/news/football');
    expect([200, 502]).toContain(res.status);
  });

});
