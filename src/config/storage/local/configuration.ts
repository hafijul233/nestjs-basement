import { registerAs } from '@nestjs/config';

export default registerAs('local', () => ({
    name: process.env.APP_NAME,
    env: process.env.APP_ENV,
    debug: process.env.APP_DEBUG,
    url: process.env.APP_URL,
    port: process.env.APP_PORT,
  }
));