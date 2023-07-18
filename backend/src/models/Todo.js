import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db.js';
import { User } from './User.js';

export const Todo = sequelize.define('todo', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },

  priority: {
    type: DataTypes.STRING
  },

  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

Todo.belongsTo(User);
User.hasMany(Todo);
