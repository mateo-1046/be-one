export interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    role: string;
}
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private users;
    private nextId;
    findAll(): User[];
    findOne(id: number): User;
    create(user: CreateUserDto): User;
    update(id: number, userDto: UpdateUserDto): User;
    remove(id: number): User;
}
