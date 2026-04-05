import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async sendContactMessage(name: string, email: string, message: string) {
    try {
      const recipient = this.configService.get<string>('MAIL_USER');
      this.logger.log(`Attempting to send email to ${recipient} from ${name} (${email})...`);
      
      await this.mailerService.sendMail({
        to: recipient,
        subject: `New Portfolio Message from ${name}`,
        html: `
          <h3>New Contact Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      this.logger.log('Email sent successfully!');
    } catch (error) {
      this.logger.error(`Failed to send email: ${error.message}`, error.stack);
      throw error; // Re-throw so the caller knows it failed
    }
  }
}
