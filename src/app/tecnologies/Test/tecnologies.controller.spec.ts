import { Test, TestingModule } from '@nestjs/testing';
import { TecnologiesController } from '../tecnologies.controller';

describe('TecnologiesController', () => {
  let controller: TecnologiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TecnologiesController],
    }).compile();

    controller = module.get<TecnologiesController>(TecnologiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
