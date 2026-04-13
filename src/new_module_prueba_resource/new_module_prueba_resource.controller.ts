import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewModulePruebaResourceService } from './new_module_prueba_resource.service';
import { CreateNewModulePruebaResourceDto } from './dto/create-new_module_prueba_resource.dto';
import { UpdateNewModulePruebaResourceDto } from './dto/update-new_module_prueba_resource.dto';

@Controller('new-module-prueba-resource')
export class NewModulePruebaResourceController {
  constructor(private readonly newModulePruebaResourceService: NewModulePruebaResourceService) {}

  @Post()
  create(@Body() createNewModulePruebaResourceDto: CreateNewModulePruebaResourceDto) {
    return this.newModulePruebaResourceService.create(createNewModulePruebaResourceDto);
  }

  @Get()
  findAll() {
    return this.newModulePruebaResourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newModulePruebaResourceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewModulePruebaResourceDto: UpdateNewModulePruebaResourceDto) {
    return this.newModulePruebaResourceService.update(+id, updateNewModulePruebaResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newModulePruebaResourceService.remove(+id);
  }
}
