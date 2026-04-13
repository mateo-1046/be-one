import { Test, TestingModule } from '@nestjs/testing';
import { NewModulePruebaResourceController } from './new_module_prueba_resource.controller';
import { NewModulePruebaResourceService } from './new_module_prueba_resource.service';

describe('NewModulePruebaResourceController', () => {
  let controller: NewModulePruebaResourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewModulePruebaResourceController],
      providers: [NewModulePruebaResourceService],
    }).compile();

    controller = module.get<NewModulePruebaResourceController>(NewModulePruebaResourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
