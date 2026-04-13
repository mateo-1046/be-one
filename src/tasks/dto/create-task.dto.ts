// ─────────────────────────────────────────────────────────────────────────────
// ACTIVITY 2-A  ·  Add validators to this DTO
// ─────────────────────────────────────────────────────────────────────────────
// Requirements:
//   - title    → required string, between 3 and 100 characters
//   - description → optional string, max 300 characters
//   - status   → optional; if provided must be one of: 'pending' | 'in-progress' | 'done'
//               hint: look up @IsEnum() from class-validator
//
// Import what you need from 'class-validator' and add the decorators below.
// ─────────────────────────────────────────────────────────────────────────────

import { IsEnum, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

const TaskStatus = ['pending', 'in-progress', 'done'] as const;
type TaskStatus = (typeof TaskStatus)[number];

export class CreateTaskDto {
  // TODO: add validator decorators
  @IsString()
  @MaxLength(100)
  @MinLength(3)
  title: string;

  // TODO: add validator decorators
  @IsString()
  @IsOptional()
  @MaxLength(100)
  description?: string;

  // TODO: add validator decorators
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: 'pending' | 'in-progress' | 'done';
}
