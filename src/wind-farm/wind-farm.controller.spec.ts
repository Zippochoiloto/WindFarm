import { Test, TestingModule } from '@nestjs/testing';
import { WindFarmController } from './wind-farm.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WindFarmService } from './wind-farm.service';
import { WindFarm, WindFarmSchema } from '../schemas/wind-farm.schema';

describe('WindFarmController', () => {
  let controller: WindFarmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WindFarmController],
      providers: [WindFarmService],
      imports: [
        MongooseModule.forFeature([
          {
            name: WindFarm.name,
            schema: WindFarmSchema,
          },
        ]),
        MongooseModule.forRoot('mongodb://localhost:27017/Wind_Farm_DB'),
      ],
    }).compile();

    controller = module.get<WindFarmController>(WindFarmController);
  });

  it('get all windfarm', async () => {
    const respond = await controller.getAllWindFarm();
    if (respond.length > 0) return true;
  });

  it('get windfarm by id', async () => {
    const result = {
      _id: '634ff736507a9116c325bd88',
      siteName: 'First site',
      windSpeed: 50,
      windDirection: 'South',
      status: 'normal',
      activePower: 10,
      maxPower: 100,
      percentageActive: 0.1,
      __v: 0,
    };
    const respond = await controller.getWindFarm({
      id: '634ff736507a9116c325bd88',
    });
    console.log('respond', respond);
  });

  it('create windfarm', async () => {
    const respond = await controller.createWindFarm({
      siteName: 'Fifth site',
      windSpeed: 50,
      windDirection: 'South',
      status: 'normal',
      activePower: 10,
      maxPower: 100,
    });
    console.log('respond', respond);
  });

  it('delete windfarm', async () => {
    const respond = await controller.deleteWindFarm({
      id: '634ff736507a9116c325bd88',
    });
    console.log('respond', respond);
  });
});
