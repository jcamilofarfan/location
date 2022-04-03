import { TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { testModule, usePipes } from './test.module';

const url = '/child';

describe('ChildController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    jest.setTimeout(30000);
    const moduleFixture: TestingModule = await testModule.compile();

    app = moduleFixture.createNestApplication();
    usePipes(app);
    await app.init();
  });

  it('/child (POST)', () => {
    const mockData = { name: 'example', area: 20, parentId: 1 };
    return request(app.getHttpServer())
      .post(url)
      .send(mockData)
      .expect(201)
      .expect((res) => {
        const data = res.body;
        expect(data).toHaveProperty('id');
        expect(data).toHaveProperty('name');
        expect(data).toHaveProperty('area');
        expect(data).toHaveProperty('createdAt');
        expect(data).toHaveProperty('updatedAt');
        expect(data).toHaveProperty('locationParent');
      });
  });

  afterAll(async () => {
    jest.setTimeout(10000);
    await app.close();
  });
});
