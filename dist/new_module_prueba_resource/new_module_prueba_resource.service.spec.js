"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const new_module_prueba_resource_service_1 = require("./new_module_prueba_resource.service");
describe('NewModulePruebaResourceService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [new_module_prueba_resource_service_1.NewModulePruebaResourceService],
        }).compile();
        service = module.get(new_module_prueba_resource_service_1.NewModulePruebaResourceService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=new_module_prueba_resource.service.spec.js.map