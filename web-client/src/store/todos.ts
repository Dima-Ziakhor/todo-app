import { flow, makeAutoObservable } from 'mobx';
import type { TodoType } from '../helpers/types';
import { fetchTodos, postTodo, removeTodo, updateTodo } from '../helpers/requests/todos';

class Todos {
  todos: TodoType[] = [];
  isLoading: boolean = false;
  constructor() {
    makeAutoObservable(this)
  }

  get getTodos(): TodoType[] {
    return this.todos;
  }

  fetchTodos = flow(function * (this: Todos, categoryId: number | null) {
    this.isLoading = true;

    const userId = localStorage.getItem('userId');
    const accessToken = localStorage.getItem('accessToken');

    if (!userId) {
      throw new Error('User ID not found!');
    }

    if (!accessToken) {
      throw new Error('Access token not found!');
    }

    this.todos = yield fetchTodos(+userId, accessToken, categoryId);
    this.isLoading = false;
  });

  addTodo = flow(function * (this: Todos, todo: Omit<TodoType, 'id' | 'completed'>) {
    try {
      const newTodo = yield postTodo(todo);
      this.todos = yield [newTodo, ...this.todos];
    } catch (err) {
      console.log(err);
    }
  });

  removeTodo = flow(function * (this: Todos, todoId: number) {
    try {
      yield removeTodo(todoId);
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    } catch (err) {
      console.log(err);
    }
  });

  updateStatus = flow(function * (this: Todos, todoId: number) {
    const todoIndex = this.todos.findIndex(t => t.id === todoId);
    const accessToken = localStorage.getItem('accessToken');

    if (todoIndex === -1) {
      return;
    }

    if (!accessToken) {
      throw new Error('Access token not found!');
    }

    this.todos[todoIndex].completed = !this.todos[todoIndex].completed;
    yield updateTodo(this.todos[todoIndex], accessToken);
  })

  updateTitle(id: number, title: string): void {
    const todo = this.todos.find(t => t.id === id);

    if (todo) {
      todo.title = title;
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}

export default new Todos();
