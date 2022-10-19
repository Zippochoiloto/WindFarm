import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WindFarm, WindFarmDocument } from '../schemas/wind-farm.schema';

@Injectable()
export class WindFarmService {
  constructor(
    @InjectModel(WindFarm.name) private windFarm: Model<WindFarmDocument>,
  ) {}
  async createWindFarmInfo(payload) {
    const windFarmPayload = {
      ...payload,
      percentageActive: payload.activePower / payload.maxPower,
    };
    return await this.windFarm.create(windFarmPayload);
  }

  async getWindFarm(payload) {
    if (payload.id !== '') return this.windFarm.findById(payload.id);
  }

  async getAllWindFarm() {
    return this.windFarm.find({});
  }

  async updateWindFarm(param, body) {
    return this.windFarm.updateOne({ id: param.id }, body);
  }

  async deleteWindFarm(param) {
    return this.windFarm.deleteOne({ _id: param.id });
  }
}
