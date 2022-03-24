import { registerAs } from '@nestjs/config';

export default registerAs('smtp', () => ({
    host: process.env.MAIL_HOST,
    username: process.env.MAIL_USERNAME,
    password: process.env.MAIL_PASSWORD,
    port: process.env.MAIL_PORT,
    encryption: process.env.MAIL_ENCRYPTION,
  }
));