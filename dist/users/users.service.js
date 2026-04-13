"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            { id: 1, name: 'Design DB schema', email: 'hola@gmail.com', age: 25, role: 'student' },
            { id: 2, name: 'Build REST API', email: 'implement@nestjs.com', age: 30, role: 'teacher' },
            { id: 3, name: 'Write tests', email: 'tests@nestjs.com', age: 28, role: 'admin' },
        ];
        this.nextId = 4;
    }
    findAll() {
        return this.users;
    }
    findOne(id) {
        const user = this.users.find((u => u.id === id));
        if (!user)
            throw new common_1.NotFoundException(`User #${id} not found`);
        return user;
    }
    create(user) {
        const newUser = { id: this.nextId++,
            name: user.name,
            email: user.email,
            age: Number(user.age),
            role: user.role ?? 'student'
        };
        this.users.push(newUser);
        return newUser;
    }
    update(id, userDto) {
        const user = this.findOne(id);
        Object.assign(user, userDto);
        return user;
    }
    remove(id) {
        const user = this.findOne(id);
        this.users = this.users.filter((u) => u.id !== id);
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map