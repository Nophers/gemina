import { resolve } from 'path';
import { config } from 'dotenv';

config({path: resolve(__dirname, '../../env')});

export default {
    data: {
      id: [process.env.ID] as string[], 
      token: process.env.TOKEN as string,
    },
};