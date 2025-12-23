import { Module } from '@nestjs/common';
import { TodosService } from './todo.service';
import { TodosController } from './todo.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [TodosController],
  providers: [TodosService, PrismaService],
})
export class TodosModule {}
