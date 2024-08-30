import { ConfigProps } from './config.types';

export const config = (): ConfigProps => ({
  port: parseInt(process.env.PORT, 10) || 3333,
});
