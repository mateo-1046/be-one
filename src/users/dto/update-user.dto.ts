// ─────────────────────────────────────────────────────────────────────────────
// ACTIVITY 3-B  ·  Create UpdateUserDto
// ─────────────────────────────────────────────────────────────────────────────
// Same as CreateUserDto but every field is optional (PATCH semantics).
// ─────────────────────────────────────────────────────────────────────────────

// TODO: your code here

import { IsInt, Min, Max,IsString, MaxLength, MinLength, IsEmail, IsNotEmpty, IsOptional, IsEnum } from "class-validator";

// TODO: your code here
const UserRoles = ['student', 'teacher', 'admin'] as const;
type UserRoles = (typeof UserRoles)[number];

export class UpdateUserDto {

    @IsString()
    @MaxLength(50)
    @MinLength(2)
    @IsOptional()
    name:string;

    @IsEmail()
    @IsNotEmpty()
    @IsOptional()
    email:string;

    @IsInt()
    @Min(1)
    @Max(120)
    @IsOptional()
    age:string;

    @IsString()
    @IsOptional()
    @IsEnum(UserRoles)
    role?:UserRoles;
}
