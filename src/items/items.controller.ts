import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemDTO } from './dto/item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findById(@Param() param): Promise<Item> {
    return this.itemsService.findById(param.id);
  }

  @Post()
  create(@Body() itemDTO: ItemDTO): Promise<Item> {
    return this.itemsService.create(itemDTO);
  }

  @Put(':id')
  update(@Param() param, @Body() itemDTO: ItemDTO): Promise<Item> {
    return this.itemsService.update(param.id, itemDTO);
  }

  @Delete(':id')
  delete(@Param() param): Promise<Item> {
    return this.itemsService.delete(param.id);
  }
}
