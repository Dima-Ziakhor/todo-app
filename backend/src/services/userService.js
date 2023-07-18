import { User } from '../models/User.js';

async function getByEmail (email) {
  return User.findOne({
    where: {
      email
    }
  });
}

async function remove (id) {
  const user = await User.findOne({
    where: { id }
  });

  user.destroy();

  return user;
}

function normalize ({ id, email }) {
  return { id, email };
}

export const userService = {
  getByEmail,
  remove,
  normalize
};
