"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewModulePruebaResourceController = void 0;
const common_1 = require("@nestjs/common");
const new_module_prueba_resource_service_1 = require("./new_module_prueba_resource.service");
const create_new_module_prueba_resource_dto_1 = require("./dto/create-new_module_prueba_resource.dto");
const update_new_module_prueba_resource_dto_1 = require("./dto/update-new_module_prueba_resource.dto");
let NewModulePruebaResourceController = class NewModulePruebaResourceController {
    constructor(newModulePruebaResourceService) {
        this.newModulePruebaResourceService = newModulePruebaResourceService;
    }
    create(createNewModulePruebaResourceDto) {
        return this.newModulePruebaResourceService.create(createNewModulePruebaResourceDto);
    }
    findAll() {
        return this.newModulePruebaResourceService.findAll();
    }
    findOne(id) {
        return this.newModulePruebaResourceService.findOne(+id);
    }
    update(id, updateNewModulePruebaResourceDto) {
        return this.newModulePruebaResourceService.update(+id, updateNewModulePruebaResourceDto);
    }
    remove(id) {
        return this.newModulePruebaResourceService.remove(+id);
    }
};
exports.NewModulePruebaResourceController = NewModulePruebaResourceController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_new_module_prueba_resource_dto_1.CreateNewModulePruebaResourceDto]),
    __metadata("design:returntype", void 0)
], NewModulePruebaResourceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NewModulePruebaResourceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NewModulePruebaResourceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_new_module_prueba_resource_dto_1.UpdateNewModulePruebaResourceDto]),
    __metadata("design:returntype", void 0)
], NewModulePruebaResourceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NewModulePruebaResourceController.prototype, "remove", null);
exports.NewModulePruebaResourceController = NewModulePruebaResourceController = __decorate([
    (0, common_1.Controller)('new-module-prueba-resource'),
    __metadata("design:paramtypes", [new_module_prueba_resource_service_1.NewModulePruebaResourceService])
], NewModulePruebaResourceController);
//# sourceMappingURL=new_module_prueba_resource.controller.js.map