import { Injectable } from '@nestjs/common';
import { CreateNewModulePruebaResourceDto } from './dto/create-new_module_prueba_resource.dto';
import { UpdateNewModulePruebaResourceDto } from './dto/update-new_module_prueba_resource.dto';

@Injectable()
export class NewModulePruebaResourceService {
  create(createNewModulePruebaResourceDto: CreateNewModulePruebaResourceDto) {
    return 'This action adds a new newModulePruebaResource';
  }

  findAll() {
    return `This action returns all newModulePruebaResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} newModulePruebaResource`;
  }

  update(id: number, updateNewModulePruebaResourceDto: UpdateNewModulePruebaResourceDto) {
    return `This action updates a #${id} newModulePruebaResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} newModulePruebaResource`;
  }
}
