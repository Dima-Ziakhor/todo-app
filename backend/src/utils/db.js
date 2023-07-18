import 'dotenv/config';
import { Sequelize } from 'sequelize';

const {
  PG_HOST,
  PG_DATABASE,
  PG_USER,
  PG_PASSWORD,
  ENDPOINT_ID
} = process.env;

const URL = `postgres://${PG_USER}:${PG_PASSWORD}@${PG_HOST}/${PG_DATABASE}?options=project%3D${ENDPOINT_ID}`;

export const sequelize = new Sequelize(`${URL}&sslmode=require`);
