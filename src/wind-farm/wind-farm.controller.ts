import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { WindFarmService } from './wind-farm.service';
import { CreateWindFarmDto, UpdateWindFarmDto } from '../dto/wind-farm.dto';

@Controller('wind-farm')
export class WindFarmController {
  constructor(private windFarmService: WindFarmService) {}
  @Post('/create')
  async createWindFarm(@Body() body: CreateWindFarmDto) {
    return await this.windFarmService.createWindFarmInfo(body);
  }

  @Get(':id')
  async getWindFarm(@Param() param) {
    return await this.windFarmService.getWindFarm(param);
  }

  @Get('')
  async getAllWindFarm() {
    return await this.windFarmService.getAllWindFarm();
  }

  @Put(':id')
  async updateWindFarm(@Body() body: UpdateWindFarmDto, @Param() param) {
    if (!param.id) {
      throw new HttpException('Record id is missing', HttpStatus.BAD_REQUEST);
    }
    return await this.windFarmService.updateWindFarm(param, body);
  }

  @Delete(':id')
  async deleteWindFarm(@Param() param) {
    if (!param.id) {
      throw new HttpException('Record id is missing', HttpStatus.BAD_REQUEST);
    }
    return await this.windFarmService.deleteWindFarm(param);
  }
}
