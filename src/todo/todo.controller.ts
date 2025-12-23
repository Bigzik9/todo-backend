import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TodosService } from './todo.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos() {
    return this.todosService.findAll();
  }

  @Post()
  createTodo(@Body('title') title: string) {
    return this.todosService.create(title);
  }

  @Put(':id')
  updateTodo(
    @Param('id') id: string,
    @Body() body: { title?: string; completed?: boolean },
  ) {
    return this.todosService.update(Number(id), body);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todosService.delete(Number(id));
  }
}
