import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
    name: process.env.API_NAME,
    env: process.env.API_ENV,
    debug: process.env.API_DEBUG,
    url: process.env.API_URL,
    port: process.env.API_PORT,
  }
));