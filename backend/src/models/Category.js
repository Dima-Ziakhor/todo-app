import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db.js';
import { Todo } from './Todo.js';
import { User } from './User.js';

export const Category = sequelize.define('category', {
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
});

Todo.belongsTo(Category);
Category.hasMany(Todo);
Category.belongsTo(User);
User.hasMany(Category);
