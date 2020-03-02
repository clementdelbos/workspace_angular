import { Injectable } from '@angular/core';
import { Todo} from './todo';

@Injectable({
  providedIn : 'root'
})
export class TodoDataService {

  lastId =0;

  todos : Todo[] = [];

  constructor() { }

//MOCK sur POST
  addTodo(todo : Todo): TodoDataService{

    if(!todo.id){
      todo.id = ++this.lastId;
      this.todos.push(todo);
    }
    return this;
  }

  remove(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  toggle(todo: Todo): TodoDataService{
    todo.completed = !todo.completed;
    return this;
  }

}

