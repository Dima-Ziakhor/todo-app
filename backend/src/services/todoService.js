import { Todo } from '../models/Todo.js';

function getAll (userId) {
  return Todo.findAll({
    where: { userId }
  });
}

function create ({ title, priority }) {

}

export const todoService = {
  getAll
};
