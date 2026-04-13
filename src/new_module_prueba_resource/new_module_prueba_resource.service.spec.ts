import { Test, TestingModule } from '@nestjs/testing';
import { NewModulePruebaResourceService } from './new_module_prueba_resource.service';

describe('NewModulePruebaResourceService', () => {
  let service: NewModulePruebaResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewModulePruebaResourceService],
    }).compile();

    service = module.get<NewModulePruebaResourceService>(NewModulePruebaResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
