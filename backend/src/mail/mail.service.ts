import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  constructor(private readonly mailerService: MailerService) {}

  async sendContactMessage(name: string, email: string, message: string) {
    try {
      this.logger.log(`Attempting to send email from ${name} (${email})...`);
      
      await this.mailerService.sendMail({
        to: process.env.MAIL_USER,
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
      this.logger.error('Failed to send email:', error);
      throw error; // Re-throw so the caller knows it failed
    }
  }
}
