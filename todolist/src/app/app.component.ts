import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})


export class AppComponent {
  title = 'todoliste';
  newTodo: Todo = new Todo({title : 'truc'});//correspond au champ input [(nGModel)] dans le html

  constructor(private todoDataService: TodoDataService){
this.todoDataService= todoDataService;

  }

  addTodo(){
    this.todoDataService.addTodo(this.newTodo);
    console.log('ajout todo');
    this.newTodo = new Todo({title: 'New todo'});
  }

  toggleTodoComplete(todo : Todo){
    console.log('Toggle complete');
    this.todoDataService.toggle(todo);
  }

  removeTodo(todo: Todo){
    console.log('REMOVE TODO');
    this.todoDataService.remove(todo.id);
  }

 get todos(){
   return this.todoDataService.todos;
 }


}
