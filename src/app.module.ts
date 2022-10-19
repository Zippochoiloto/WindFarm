import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WindFarmModule } from './wind-farm/wind-farm.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Wind_Farm_DB'),
    WindFarmModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
