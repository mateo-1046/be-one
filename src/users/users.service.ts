// ─────────────────────────────────────────────────────────────────────────────
// ACTIVITY 3-C  ·  Implement UsersService
// ─────────────────────────────────────────────────────────────────────────────
// Create an in-memory service following the same pattern as ProductsService.
//
// Requirements:
//   - Store users in a private array
//   - Pre-populate with at least 2 seed users
//   - Implement: findAll, findOne(id), create(dto), update(id, dto), remove(id)
//   - findOne must throw NotFoundException when user is not found
//
// Interface to use:
//   export interface User {
//     id: number;
//     name: string;
//     email: string;
//     age: number;
//     role: string;
//   }
// ─────────────────────────────────────────────────────────────────────────────

export interface User {
    id: number;   
    name: string;
    email: string;
    age: number;
    role: string;
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// TODO: import NotFoundException and your DTOs

@Injectable()
export class UsersService {
  // TODO: implement the service

  private users: User[] = [
      { id: 1, name: 'Design DB schema', email    : 'hola@gmail.com', age: 25, role: 'student' },
      { id: 2, name: 'Build REST API', email: 'implement@nestjs.com', age: 30, role: 'teacher' },
      { id: 3, name: 'Write tests', email: 'tests@nestjs.com', age: 28, role: 'admin' },
    ];
    private nextId = 4;

  findAll(): User[]{
    return this.users;
  }

  findOne(id:number): User{
    const user = this.users.find((u => u.id === id));
    if(!user) throw new NotFoundException(`User #${id} not found`);
    return user;
  }

  create( user: CreateUserDto): User{
    const newUser = {id: this.nextId++,
    name: user.name,
    email: user.email,
    age: Number(user.age),
    role: user.role ?? 'student'
     };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, userDto: UpdateUserDto): User{
    const user = this.findOne(id);
    Object.assign(user, userDto);
    return user;
  }

  remove(id:number):User{
    const user = this.findOne(id);
    this.users = this.users.filter((u) => u.id !== id);
    return user;
  }
}