import { Test, TestingModule } from '@nestjs/testing';
import { NewModulePruebaServiceService } from './new_module_prueba_service.service';

describe('NewModulePruebaServiceService', () => {
  let service: NewModulePruebaServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewModulePruebaServiceService],
    }).compile();

    service = module.get<NewModulePruebaServiceService>(NewModulePruebaServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
