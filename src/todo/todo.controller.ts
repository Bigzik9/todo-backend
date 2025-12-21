import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TodoService } from './todo.service';


@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
create(@Body() body: any) {
  return this.todoService.create(body);
}

@Get()
findAll() {
  return this.todoService.findAll();
}

@Get(':id')
findOne(@Param('id') id: string) {
  return this.todoService.findOne(id);
}

@Put(':id')
update(@Param('id') id: string, @Body() body: any) {
  return this.todoService.update(id, body);
}

@Delete(':id')
remove(@Param('id') id: string) {
  return this.todoService.remove(id);
}

}

