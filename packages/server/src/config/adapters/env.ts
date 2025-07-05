import path from 'path';
import dotenv from 'dotenv';
import { get } from 'env-var';

const isPackaged = !!process.env.RESOURCES_PATH;

const envPath = isPackaged
  ? path.join(process.env.RESOURCES_PATH || "", 'server', '.env')
  : path.resolve(__dirname, '..', '..', '..', '.env');

dotenv.config({ path: envPath });

export const env = {
  PORT: get('PORT').required().asPortNumber(),
  MONGO_URL: get('MONGO_URL').required().asString(),
  MONGO_DB_NAME: get('MONGO_DB_NAME').required().asString(),
  MONGO_USER: get('MONGO_USER').required().asString(),
  MONGO_PASSWORD: get('MONGO_PASSWORD').required().asString(),
};
