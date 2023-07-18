import { Category } from '../models/Category.js';

async function getAll (req, res) {
  const { userId } = req.params;
  const categories = await Category.findAll({
    where: { userId }
  });

  if (!categories.length) {
    res.sendStatus(404);
    return;
  }

  res.send([
    {
      id: 0,
      name: 'All',
      userId,
      createdAt: 'Forever',
      updatedAt: 'Never'
    },
    ...categories
  ]);
}

async function create (req, res) {
  const { userId, name } = req.body;

  if (!userId || !name) {
    res.sendStatus(422);
    return;
  }

  const category = await Category.create({
    userId,
    name
  });

  res.send(category);
}

async function remove (req, res) {
  const { id } = req.query;

  if (!id) {
    res.send(422);
    return;
  }

  const category = await Category.findOne({
    where: { id }
  });

  category.destroy();

  res.send(category);
}

export const categoryController = {
  getAll,
  create,
  remove
};
