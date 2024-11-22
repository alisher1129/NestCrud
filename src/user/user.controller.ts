import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  HttpException,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { SUCCESS_CODES, SUCCESS_MESSAGES } from 'src/utils/successConstants';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    try {
      this.userService.createUserWithProfile(userDto);
      return {
        status: SUCCESS_CODES.SUCCESS_CREATED,
        message: SUCCESS_MESSAGES.SUCCESS_CREATED,
        data: [],
      };
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Get(':id')
  async getUser(@Param('id') id: number) {
    try {
      let user = await this.userService.getUserWithProfile(id);
      return {
        status: SUCCESS_CODES.SUCCESS_OK,
        message: SUCCESS_MESSAGES.DATA_FETCHED_SUCCESSFULLY,
        data: user,
      };
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: number,
    @Body()
    body: { user: UpdateUserDto; profile?: UpdateProfileDto },
  ) {
    try {
      const { user, profile } = body;
      await this.userService.updateUserWithProfile(id, user, profile);
      return {
        status: SUCCESS_CODES.SUCCESS_OK,
        message: SUCCESS_MESSAGES.UPDATE_SUCCESSFUL,
        data: [],
      };
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    try {
      await this.userService.deleteUserWithProfile(id);

      return {
        status: SUCCESS_CODES.SUCCESS_DELETE,
        message: SUCCESS_MESSAGES.DELETE_SUCCESSFUL,
        data: [],
      };
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
