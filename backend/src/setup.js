import 'dotenv/config';
import { sequelize } from './utils/db.js';
import './models/User.js';
import './models/Todo.js';
import './models/Category.js';
import './models/Token.js';

await sequelize.sync({ force: true });
