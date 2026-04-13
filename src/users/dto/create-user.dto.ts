// ─────────────────────────────────────────────────────────────────────────────
// ACTIVITY 3-A  ·  Create the User DTO from scratch
// ─────────────────────────────────────────────────────────────────────────────
// A User must have:
//   - name    → required string, 2–50 chars
//   - email   → required, must be a valid email address
//               hint: @IsEmail() from class-validator
//   - age     → required number, integer, minimum 1, maximum 120
//               hint: @IsInt(), @Min(), @Max()
//   - role    → optional string; allowed values: 'student' | 'teacher' | 'admin'
//
// Steps:
//   1. Import the decorators you need from 'class-validator'
//   2. Define the class with the correct properties
//   3. Add a decorator to each property
// ─────────────────────────────────────────────────────────────────────────────

import { IsInt, Min, Max,IsString, MaxLength, MinLength, IsEmail, IsNotEmpty, IsOptional, IsEnum } from "class-validator";

// TODO: your code here
const UserRoles = ['student', 'teacher', 'admin'] as const;
type UserRoles = (typeof UserRoles)[number];

export class CreateUserDto {

    @IsString()
    @MaxLength(50)
    @MinLength(2)
    name:string;

    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsInt()
    @Min(1)
    @Max(120)
    age:string;

    @IsString()
    @IsOptional()
    @IsEnum(UserRoles)
    role?:UserRoles;
}
