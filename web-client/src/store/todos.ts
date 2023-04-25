import { makeAutoObservable } from 'mobx';
import type { TodoType } from '../helpers/types';

class Todos {
  todos: TodoType[] = JSON.parse(localStorage.getItem('todos') ?? '[]');
  constructor() {
    makeAutoObservable(this)
  }

  get getTodos(): TodoType[] {
    return this.todos;
  }

  addTodo(todo: Omit<TodoType, 'id' | 'completed'>): void {
    const tempTodos = [...this.todos];

    const lastId = tempTodos.length
      ? tempTodos.sort((a, b) => a.id - b.id)[tempTodos.length - 1].id
      : 0;

    this.todos = [
      {
        ...todo,
        completed: false,
        id: lastId + 1
      },
      ...this.todos
    ];

    localStorage.setItem('todos', JSON.stringify([...this.todos]))
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  updateStatus(id: number): void {
    const todoIndex = this.todos.findIndex(t => t.id === id);

    if (todoIndex !== -1) {
      this.todos[todoIndex].completed = !this.todos[todoIndex].completed;
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  updateTitle(id: number, title: string): void {
    const todo = this.todos.find(t => t.id === id);

    if (todo) {
      todo.title = title;
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}

export default new Todos();
