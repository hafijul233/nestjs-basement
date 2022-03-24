import { Test, TestingModule } from '@nestjs/testing';
import { ResetController } from './reset.controller';
import { ResetService } from './reset.service';

describe('ResetController', () => {
  let controller: ResetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResetController],
      providers: [ResetService],
    }).compile();

    controller = module.get<ResetController>(ResetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
