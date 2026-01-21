import { IsOptional, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  name?: string;
}

export class DeleteUserDto {
  @IsString()
  email: string;
}
