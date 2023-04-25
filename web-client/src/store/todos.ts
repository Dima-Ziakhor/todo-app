import { makeAutoObservable } from 'mobx';
import type { TodoType } from '../helpers/types';
import { fetchTodos, postTodo, removeTodo } from '../helpers/requests/todos';

class Todos {
  todos: TodoType[] = [];
  constructor() {
    makeAutoObservable(this)
  }

  get getTodos(): TodoType[] {
    return this.todos;
  }

  async fetchTodos(): Promise<void> {
    this.todos = await fetchTodos();
  }

  async addTodo(todo: Omit<TodoType, 'id' | 'completed'>): Promise<void> {
    this.todos = await postTodo(todo);
  }

  removeTodo(id: string): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    removeTodo(id)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }

  updateStatus(id: string): void {
    const todoIndex = this.todos.findIndex(t => t.id === id);

    if (todoIndex !== -1) {
      this.todos[todoIndex].completed = !this.todos[todoIndex].completed;
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  updateTitle(id: string, title: string): void {
    const todo = this.todos.find(t => t.id === id);

    if (todo) {
      todo.title = title;
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}

export default new Todos();
