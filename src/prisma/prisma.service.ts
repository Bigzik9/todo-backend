// src/prisma/prisma.service.ts
import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  async onModuleInit() {
    await this.$connect();
    this.logger.log('Prisma connected to database');

    // Optional: Run schema push or migrations at startup (safe for Render)
    // Uncomment if you want auto-schema sync (use with caution in prod)
    // await this.$executeRaw`SELECT 1`; // Test connection
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}