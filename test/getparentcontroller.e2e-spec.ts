import { TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { testModule, usePipes } from './test.module';

const url = '/parent';

describe('ParentController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await testModule.compile();

    app = moduleFixture.createNestApplication();
    usePipes(app);
    await app.init();
  });
  it('/parent/:id (GET)', () => {
    return request(app.getHttpServer())
      .get(`${url}/1`)
      .expect(200)
      .expect((res) => {
        const data = res.body;
        expect(data).toHaveProperty('id');
        expect(data).toHaveProperty('name');
        expect(data).toHaveProperty('area');
        expect(data).toHaveProperty('createdAt');
        expect(data).toHaveProperty('updatedAt');
        expect(data).toHaveProperty('locationChildren');
        const [child] = data.locationChildren;
        expect(child).toHaveProperty('id');
        expect(child).toHaveProperty('name');
        expect(child).toHaveProperty('area');
        expect(child).toHaveProperty('createdAt');
        expect(child).toHaveProperty('updatedAt');
      });
  });
  afterAll(async () => {
    await app.close();
  });
});

describe('ParentController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    jest.setTimeout(30000);
    const moduleFixture: TestingModule = await testModule.compile();

    app = moduleFixture.createNestApplication();
    usePipes(app);
    await app.init();
  });

  it('/parent (GET)', () => {
    return request(app.getHttpServer())
      .get(url)
      .expect(200)
      .expect((res) => {
        const [data] = res.body;
        expect(data).toHaveProperty('id');
        expect(data).toHaveProperty('name');
        expect(data).toHaveProperty('area');
        expect(data).toHaveProperty('createdAt');
        expect(data).toHaveProperty('updatedAt');
        expect(data).toHaveProperty('locationChildren');
        const [locationChildren] = data.locationChildren;
        expect(locationChildren).toHaveProperty('id');
        expect(locationChildren).toHaveProperty('name');
        expect(locationChildren).toHaveProperty('area');
        expect(locationChildren).toHaveProperty('createdAt');
        expect(locationChildren).toHaveProperty('updatedAt');
      });
  });

  afterAll(async () => {
    jest.setTimeout(10000);
    await app.close();
  });
});
