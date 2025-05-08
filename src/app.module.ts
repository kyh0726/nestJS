import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { ChatModule } from './chat/chat.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BoardsModule, ChatModule, UsersModule],
})
export class AppModule {}
