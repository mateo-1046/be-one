import { CreateNewModulePruebaResourceDto } from './dto/create-new_module_prueba_resource.dto';
import { UpdateNewModulePruebaResourceDto } from './dto/update-new_module_prueba_resource.dto';
export declare class NewModulePruebaResourceService {
    create(createNewModulePruebaResourceDto: CreateNewModulePruebaResourceDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateNewModulePruebaResourceDto: UpdateNewModulePruebaResourceDto): string;
    remove(id: number): string;
}
