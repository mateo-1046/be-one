import { Module } from '@nestjs/common';
import { NewModulePruebaResourceService } from './new_module_prueba_resource.service';
import { NewModulePruebaResourceController } from './new_module_prueba_resource.controller';

@Module({
  controllers: [NewModulePruebaResourceController],
  providers: [NewModulePruebaResourceService],
})
export class NewModulePruebaResourceModule {}
