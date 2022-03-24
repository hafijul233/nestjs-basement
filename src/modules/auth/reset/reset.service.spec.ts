import { Test, TestingModule } from '@nestjs/testing';
import { ResetService } from './reset.service';

describe('ResetService', () => {
  let service: ResetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResetService],
    }).compile();

    service = module.get<ResetService>(ResetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
