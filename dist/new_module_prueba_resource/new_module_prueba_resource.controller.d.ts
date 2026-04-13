import { NewModulePruebaResourceService } from './new_module_prueba_resource.service';
import { CreateNewModulePruebaResourceDto } from './dto/create-new_module_prueba_resource.dto';
import { UpdateNewModulePruebaResourceDto } from './dto/update-new_module_prueba_resource.dto';
export declare class NewModulePruebaResourceController {
    private readonly newModulePruebaResourceService;
    constructor(newModulePruebaResourceService: NewModulePruebaResourceService);
    create(createNewModulePruebaResourceDto: CreateNewModulePruebaResourceDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateNewModulePruebaResourceDto: UpdateNewModulePruebaResourceDto): string;
    remove(id: string): string;
}
