import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './message.entity';
import { MailModule } from '../mail/mail.module';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Message]), MailModule],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
