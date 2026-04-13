import { PartialType } from '@nestjs/mapped-types';
import { CreateNewModulePruebaResourceDto } from './create-new_module_prueba_resource.dto';

export class UpdateNewModulePruebaResourceDto extends PartialType(CreateNewModulePruebaResourceDto) {}
