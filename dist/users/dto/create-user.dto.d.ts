declare const UserRoles: readonly ["student", "teacher", "admin"];
type UserRoles = (typeof UserRoles)[number];
export declare class CreateUserDto {
    name: string;
    email: string;
    age: string;
    role?: UserRoles;
}
export {};
