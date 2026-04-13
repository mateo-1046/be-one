// ─────────────────────────────────────────────────────────────────────────────
// ACTIVITY 2-B  ·  Build the UpdateTaskDto
// ─────────────────────────────────────────────────────────────────────────────
// Requirements:
//   - Same fields as CreateTaskDto but ALL fields are optional (it's a PATCH)
//   - Re-use the same validators but add @IsOptional() to each field
// ─────────────────────────────────────────────────────────────────────────────

// TODO: import validators from 'class-validator'
import { IsEnum, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

const TaskStatus = ['pending', 'in-progress', 'done'] as const;
type TaskStatus = (typeof TaskStatus)[number];

export class UpdateTaskDto {
  // TODO: implement the DTO (copy fields from CreateTaskDto and make them optional)

  // TODO: add validator decorators
    @IsOptional()
    @IsString()
    @MaxLength(100)
    @MinLength(3)
    title: string;
  
    // TODO: add validator decorators
    @IsOptional()
    @IsString()
    @IsOptional()
    @MaxLength(100)
    description?: string;
  
    // TODO: add validator decorators
    @IsEnum(TaskStatus)
    @IsOptional()
    status?: 'pending' | 'in-progress' | 'done';
}
