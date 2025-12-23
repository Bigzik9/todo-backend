import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.todo.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  create(title: string) {
    return this.prisma.todo.create({
      data: { title },
    });
  }

  update(id: number, data: { title?: string; completed?: boolean }) {
    return this.prisma.todo.update({
      where: { id },
      data,
    });
  }

  delete(id: number) {
    return this.prisma.todo.delete({
      where: { id },
    });
  }
}
