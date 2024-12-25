import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  createUser,
  deleteUser,
  getUserByEmail,
  updateUserById,
  updateUserPfpById,
} from '../service/users';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';

@Controller('users')
export class usersController {
  @Post()
  async signup(
    @Body() body: { email: string; password: string; full_name: string },
  ) {
    return createUser(body);
  }

  @Get('/:email&:password')
  async signin(
    @Param('email') email: string,
    @Param('password') password: string,
  ) {
    return getUserByEmail(email, password);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return deleteUser(id);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() body: any) {
    return updateUserById(id, body);
  }

  @Post('/uploadpfp/:id')
  @UseInterceptors(FileInterceptor('file'))
  async updatePfp(@Param('id') id: string, @UploadedFile() file: any) {
    console.log('test', file);

    return updateUserPfpById(id, file);
  }
}
