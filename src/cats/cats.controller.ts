import { Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    return 'all cat';
  }
  @Get(':id')
  getCat(@Param('id') id: number) {
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
