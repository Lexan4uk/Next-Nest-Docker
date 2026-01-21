import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteUserDto, UserDto } from './dto/users.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() data: UserDto) {
    return this.usersService.createUser(data);
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post('/delete')
  deleteUser(@Body() data: DeleteUserDto) {
    return this.usersService.DeleteUserDto(data);
  }
}
