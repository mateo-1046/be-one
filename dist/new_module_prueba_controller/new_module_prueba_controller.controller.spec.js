"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const new_module_prueba_controller_controller_1 = require("./new_module_prueba_controller.controller");
describe('NewModulePruebaControllerController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [new_module_prueba_controller_controller_1.NewModulePruebaControllerController],
        }).compile();
        controller = module.get(new_module_prueba_controller_controller_1.NewModulePruebaControllerController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=new_module_prueba_controller.controller.spec.js.map