import {
  Controller,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { CatsService } from './cats.service';

@Controller('cats')
// @UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    throw new HttpException('api broken', 400);
    return 'all cat';
  }
  @Get(':id')
  getCat(@Param('id', ParseIntPipe) id: number) {
    return `#${id} cat`;
  }
  @Post()
  createCat(@Param('id') id: number) {
    return `#${id} cat`;
  }
  @Put(':id')
  updateCat(@Param('id') id: number) {
    return `#${id} cat`;
  }
  @Patch(':id')
  updatePartialCat() {
    return;
  }
}
