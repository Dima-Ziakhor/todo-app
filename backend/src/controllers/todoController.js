import { Todo } from '../models/Todo.js';

async function getByCategory (req, res) {
  const { userId, categoryId } = req.query;

  if (!userId) {
    res.send(422);
    return;
  }

  const options = {
    userId
  };

  if (categoryId && categoryId !== '0') {
    options.categoryId = categoryId;
  }

  const todos = await Todo.findAll({
    where: options
  });

  if (!todos.length) {
    res.sendStatus(404);
    return;
  }

  res.send(todos);
}

async function create (req, res) {
  const { title, priority, userId, categoryId } = req.body;

  if (!title || !priority || !userId || !categoryId) {
    res.sendStatus(422);
    return;
  }

  const todo = await Todo.create({
    title,
    priority,
    userId,
    categoryId,
    completed: false
  });

  res.send(todo);
}

async function update (req, res) {
  const { id, title, completed } = req.body;

  if (!id) {
    res.send(422);
    return;
  }

  const todo = await Todo.update({ title, completed }, {
    where: { id }
  });

  res.send(todo);
}

async function remove (req, res) {
  const { id } = req.query;

  if (!id) {
    res.send(422);
    return;
  }

  const todo = await Todo.findOne({
    where: { id }
  });

  await todo.destroy();

  res.send(todo);
}

export const todoController = {
  getByCategory,
  create,
  update,
  remove
};
