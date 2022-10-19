import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateWindFarmDto {
  @IsNotEmpty()
  @IsString()
  siteName: string;

  @IsNotEmpty()
  @IsNumber()
  windSpeed: number;

  @IsNotEmpty()
  @IsString()
  windDirection: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsNumber()
  activePower: number;

  @IsNotEmpty()
  @IsNumber()
  maxPower: number;
}

export class UpdateWindFarmDto {
  @IsOptional()
  @IsString()
  siteName: string;

  @IsOptional()
  @IsNumber()
  windSpeed: number;

  @IsOptional()
  @IsString()
  windDirection: string;

  @IsOptional()
  @IsString()
  status: string;

  @IsOptional()
  @IsNumber()
  activePower: number;

  @IsOptional()
  @IsNumber()
  maxPower: number;
}
