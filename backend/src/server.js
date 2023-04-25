import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(cors());

let todos = [
  { id: '1', title: 'HTML', category: 'Nothing', completed: true },
  { id: '2', title: 'CSS', category: 'Nothing', completed: true },
  { id: '3', title: 'JS', category: 'Nothing', completed: false },
  { id: '4', title: 'React', category: 'Nothing', completed: false },
];
app.get('/todos', (req, res) => {
  res.send(todos);
});

app.get('/todos/:todoId', (req, res) => {
  const { todoId } = req.params;
  const todo = todos.find(t => t.id === +todoId);

  if (!todo) {
    res.sendStatus(404);
    return;
  }

  res.send(todo);
});

app.post('/todos', express.json(),(req, res) => {
  const { title } = req.body;

  if (!title) {
    res.sendStatus(422);
    return;
  }

  const newTodo = {
    id: uuidv4(),
    title,
    category: 'Nothing',
    completed: false
  };

  todos = [newTodo, ...todos];

  res.statusCode = 201;
  res.send(todos);
});

app.delete('/todos/:todoId', (req, res) => {
  const { todoId } = req.params;
  const filteredTodos = todos.filter(t => t.id !== todoId);

  todos = filteredTodos;
  res.sendStatus(204);
});

app.listen(5001);
