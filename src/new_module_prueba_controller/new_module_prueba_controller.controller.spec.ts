import { Test, TestingModule } from '@nestjs/testing';
import { NewModulePruebaControllerController } from './new_module_prueba_controller.controller';

describe('NewModulePruebaControllerController', () => {
  let controller: NewModulePruebaControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewModulePruebaControllerController],
    }).compile();

    controller = module.get<NewModulePruebaControllerController>(NewModulePruebaControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
