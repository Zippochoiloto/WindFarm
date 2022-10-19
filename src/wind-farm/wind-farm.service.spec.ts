import { Test, TestingModule } from '@nestjs/testing';
import { WindFarmService } from './wind-farm.service';

describe('WindFarmService', () => {
  let service: WindFarmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WindFarmService],
    }).compile();

    service = module.get<WindFarmService>(WindFarmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
