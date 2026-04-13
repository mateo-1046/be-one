"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const new_module_prueba_resource_controller_1 = require("./new_module_prueba_resource.controller");
const new_module_prueba_resource_service_1 = require("./new_module_prueba_resource.service");
describe('NewModulePruebaResourceController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [new_module_prueba_resource_controller_1.NewModulePruebaResourceController],
            providers: [new_module_prueba_resource_service_1.NewModulePruebaResourceService],
        }).compile();
        controller = module.get(new_module_prueba_resource_controller_1.NewModulePruebaResourceController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=new_module_prueba_resource.controller.spec.js.map