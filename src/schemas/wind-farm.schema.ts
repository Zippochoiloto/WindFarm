import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WindFarmDocument = WindFarm & Document;

@Schema({
  collection: 'wind_farm',
})
export class WindFarm {
  @Prop()
  siteName: string;

  @Prop()
  windSpeed: number;

  @Prop()
  windDirection: string;

  @Prop()
  status: string;

  @Prop()
  activePower: number;

  @Prop()
  maxPower: number;

  @Prop()
  percentageActive: number;
}

export const WindFarmSchema = SchemaFactory.createForClass(WindFarm);
