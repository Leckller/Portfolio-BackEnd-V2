import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET) projects', () => {
    return request(app.getHttpServer())
      .get('/projects')
      .expect(200)
      .then((res) => {
        res.body.forEach(({ id, codeLink, description, title, webLink }) => {
          expect(id).toBeDefined();
          expect(codeLink).toBeDefined();
          expect(description).toBeDefined();
          expect(title).toBeDefined();
          expect(webLink).toBeDefined();
        });
      });
  });
});
