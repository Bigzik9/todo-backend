import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  create(data: any) {
    return { message: 'Todo created', data };
  }

  findAll() {
    return [];
  }

  findOne(id: string) {
    return { id };
  }

  update(id: string, data: any) {
    return { id, ...data };
  }

  remove(id: string) {
    return { message: 'Todo deleted', id };
  }
}

