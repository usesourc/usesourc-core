import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NotificationsModule } from './notifications/notifications.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [UsersModule, NotificationsModule, RepositoriesModule, LogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
