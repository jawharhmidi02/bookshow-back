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
  getBookByUserId,
  createBook,
  deleteBook,
  getBookById,
  getBooks,
  getBooksOrderCategory,
  getBooksOrderGenre,
  getBooksOrderTime,
  updateBookById,
  updateBookCoverById,
  updateBookPdfUrlById,
} from '../service/books';
import * as path from 'path';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('books')
export class booksController {
  @Post()
  async create(
    @Body()
    body: {
      title: string;
      description: string;
      pdf_url: string;
      id_user: string;
      category: string;
      genre: string;
    },
  ) {
    return createBook(body);
  }

  @Get()
  async get() {
    return getBooks();
  }

  @Get('/order/category/:category')
  async orderCategory(@Param('category') category: string) {
    return getBooksOrderCategory(category);
  }

  @Get('/order/time/')
  async orderTime() {
    return getBooksOrderTime();
  }

  @Get('/order/genre/:genre')
  async orderGenre(@Param('genre') genre: string) {
    return getBooksOrderGenre(genre);
  }

  @Get('/byid/:id')
  async retrieve(@Param('id') id: string) {
    return getBookById(id);
  }

  @Get('/byuserid/:id')
  async retrieveuserbooks(@Param('id') id: string) {
    return getBookByUserId(id);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() body: any) {
    return updateBookById(id, body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return deleteBook(id);
  }

  @Post('/uploadcover/:id')
  @UseInterceptors(FileInterceptor('file'))
  async updateCover(@Param('id') id: string, @UploadedFile() file: any) {
    console.log('test', file);

    return updateBookCoverById(id, file);
  }

  @Post('/uploadpdf/:id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req: any, file: any, cb: any) => {
          console.log('herfe');

          const ext = path.extname(file.originalname);
          const filename = `${path.basename(
            file.originalname,
            ext,
          )}-${Date.now()}${ext}`;
          cb(null, filename);
        },
      }),
    }),
  )
  async updatePdf(@Param('id') id: string, @UploadedFile() file: any) {
    console.log('test', file);

    return updateBookPdfUrlById(id, file);
  }
}
