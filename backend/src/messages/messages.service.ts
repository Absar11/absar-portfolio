import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { MailService } from '../mail/mail.service';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messagesRepository: Repository<Message>,
    private mailService: MailService,
  ) {}

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    const newMessage = this.messagesRepository.create(createMessageDto);
    const savedMessage = await this.messagesRepository.save(newMessage);

    // Send email notification
    try {
      await this.mailService.sendContactMessage(
        savedMessage.name,
        savedMessage.email,
        savedMessage.message,
      );
    } catch (error) {
      console.error('Failed to send email notification:', error);
      // We don't throw here to ensure the message is still saved and API returns success
    }

    return savedMessage;
  }

  findAll(): Promise<Message[]> {
    return this.messagesRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async remove(id: number): Promise<void> {
    await this.messagesRepository.delete(id);
  }
}
