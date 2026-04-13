import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { NewModulePruebaModule } from './new_module_prueba/new_module_prueba.module';
import { NewModulePruebaControllerController } from './new_module_prueba_controller/new_module_prueba_controller.controller';
import { NewModulePruebaServiceService } from './new_module_prueba_service/new_module_prueba_service.service';
import { NewModulePruebaResourceModule } from './new_module_prueba_resource/new_module_prueba_resource.module';

@Module({
  imports: [
    ProductsModule,
    TasksModule,
    UsersModule,
    NewModulePruebaModule,
    NewModulePruebaResourceModule, // TODO (Activity 3): you will build this module from scratch
  ],
  controllers: [NewModulePruebaControllerController],
  providers: [NewModulePruebaServiceService],
})
export class AppModule {}
