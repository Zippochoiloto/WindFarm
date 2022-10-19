import { Module } from '@nestjs/common';
import { WindFarmService } from './wind-farm.service';
import { WindFarmController } from './wind-farm.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WindFarm, WindFarmSchema } from '../schemas/wind-farm.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: WindFarm.name,
        schema: WindFarmSchema,
      },
    ]),
  ],
  controllers: [WindFarmController],
  providers: [WindFarmService],
})
export class WindFarmModule {}
