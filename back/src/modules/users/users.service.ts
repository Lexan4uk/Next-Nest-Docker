import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { DeleteUserDto, UserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: UserDto) {
    const isUserExists = await this.prisma.user.findFirst({
      where: { email: data.email },
    });
    if (isUserExists)
      throw new ConflictException('User with this email already exists');
    const newUser = this.prisma.user.create({
      data: { email: data.email, name: data.name },
    });
    return newUser;
  }

  getUsers() {
    return this.prisma.user.findMany({ select: { name: true, email: true } });
  }

  async DeleteUserDto(data: DeleteUserDto) {
    const userForDelete = await this.prisma.user.findFirst({
      where: { email: data.email },
    });
    if (!userForDelete)
      throw new NotFoundException('There is no user with this email');
    const deleteUser = await this.prisma.user.delete({
      where: { id: userForDelete.id },
    });
    return true;
  }
}
