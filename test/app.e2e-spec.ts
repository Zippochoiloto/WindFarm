import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { MongooseModule } from '@nestjs/mongoose';
import { WindFarm, WindFarmSchema } from '../src/schemas/wind-farm.schema';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        MongooseModule.forRoot('mongodb://localhost:27017/Wind_Farm_DB'),
        MongooseModule.forFeature([
          {
            name: WindFarm.name,
            schema: WindFarmSchema,
          },
        ]),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/wind-farm/', () => {
    return request(app.getHttpServer())
      .get('/wind-farm')
      .expect(200)
      .expect([
        {
          _id: '634ff736507a9116c325bd88',
          siteName: 'First site',
          windSpeed: 50,
          windDirection: 'South',
          status: 'normal',
          activePower: 10,
          maxPower: 100,
          percentageActive: 0.1,
          __v: 0,
        },
        {
          _id: '634ff73b507a9116c325bd8a',
          siteName: 'Second site',
          windSpeed: 20,
          windDirection: 'South',
          status: 'normal',
          activePower: 10,
          maxPower: 100,
          percentageActive: 0.1,
          __v: 0,
        },
        {
          _id: '634ff741507a9116c325bd8c',
          siteName: 'Third site',
          windSpeed: 20,
          windDirection: 'South',
          status: 'normal',
          activePower: 10,
          maxPower: 100,
          percentageActive: 0.1,
          __v: 0,
        },
        {
          _id: '634ff74a507a9116c325bd8e',
          siteName: 'Fourth site',
          windSpeed: 20,
          windDirection: 'South',
          status: 'normal',
          activePower: 20,
          maxPower: 100,
          percentageActive: 0.2,
          __v: 0,
        },
      ]);
  });
});
