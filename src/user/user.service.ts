import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ERROR_CODES, ERROR_MESSAGES } from 'src/utils/errorsConstants';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async createUserWithProfile(userDto: CreateUserDto) {
    const { profile, ...userData } = userDto;

    const newProfile = this.profileRepository.create(profile);
    const savedProfile = await this.profileRepository.save(newProfile);

    const newUser = this.userRepository.create({
      ...userData,
      profile: savedProfile,
    });
    return this.userRepository.save(newUser);
  }

  async getUserWithProfile(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['profile'],
    });
    if (!user || user == null)
      throw new HttpException(
        ERROR_MESSAGES.USER_NOT_FOUND,
        ERROR_CODES.USER_NOT_FOUND,
      );

    return user;
  }

  //not working might be work tomorrow
  async updateUserWithProfile(
    userId: number,
    userDto: UpdateUserDto,
    profileDto?: UpdateProfileDto,
  ) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['profile'],
    });

    if (!user || user == null)
      throw new HttpException(
        ERROR_MESSAGES.USER_NOT_FOUND,
        ERROR_CODES.USER_NOT_FOUND,
      );

    // if (profileDto) {
    //   if (!user.profile) {
    //     throw new HttpException(
    //       "User Profile Not Found",
    //       ERROR_CODES.USER_NOT_FOUND)
    //   }
    //   Object.assign(user.profile, profileDto);
    //   await this.profileRepository.save(user.profile);
    // }

    // Object.assign(user, userDto);

    // return this.userRepository.save(userDto);

    // Update user fields if provided
    // Object.assign(user, userDto);

    // Update profile fields if provided
    if (userDto.profile && user.profile) {
      // Object.assign(user.profile, userDto.profile);
      await this.profileRepository.save(user.profile);
    }

    // Save the updated user entity
    return await this.userRepository.save(user);
  }

  async deleteUserWithProfile(userId: number) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['profile'],
    });

    if (!user || user == null)
      throw new HttpException(
        ERROR_MESSAGES.USER_NOT_FOUND,
        ERROR_CODES.USER_NOT_FOUND,
      );

    await this.profileRepository.delete(user.profile.id);

    await this.userRepository.delete(userId);
  }
}
