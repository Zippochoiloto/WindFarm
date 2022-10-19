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

  it('should be defined', async () => {
    const respond = await controller.getAllWindFarm();
    if (respond.length > 0) return true;
  });
});
