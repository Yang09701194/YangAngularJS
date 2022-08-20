import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service'
import { Todo } from './todo.model'
import { TodoStatusType } from './todo-status-type'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService: TodoListService) { 

  }

  ngOnInit(): void {
  }

  addTodo(inputRef: any): void{
    // console.log("");
    const todo = inputRef.value.trim();
    if(todo){
      this.todoListService.add(todo);
      inputRef.value = '';
    }

  }

  getListAll():Todo[]{
    return this.todoListService.getList();
  }

  getList(): Todo[] {
    let list: Todo[] = [];
    switch(this.status) {
      case TodoStatusType.Active:
        list = this.getRemainingList();
        break;
      case TodoStatusType.Completed:
        list = this.getCompletedList();
        break;
      default:
        list = this.todoListService.getList();
        break;
    }

    return list;
  }

  remove(index:number):void{
    this.todoListService.remove(index);
  }

  update(todo:Todo, newTitle:string):void{
    if(!todo.editmode){
      return;
    }
    const title = newTitle.trim();
    if(title){
      todo.setTitle(newTitle);
      todo.editmode = false;
    }else{
      const index = this.getList().indexOf(todo);
      if(index != -1){
        this.remove(index);
      }
    }
  }

  cancelEditing(todo:Todo):void{
    todo.editmode = false;
  }

  
  edit(todo:Todo){
    todo.editmode = true;
  }
  
  getRemainingList(): Todo[]{
    return this.todoListService.getWithCompleted(false);
  }
  getCompletedList(): Todo[]{
    return this.todoListService.getWithCompleted(true);
  }
  setStatus(status: number):void {
    this.status = status;
  }
  checkStatus(status: number):boolean{
    return this.status === status;
  }
  removeCompleted():void{
    this.todoListService.removeCompleted();
  }

  allCompleted():boolean{
    return this.getListAll().length == this.getCompletedList().length;
  }
  setAllTo(completed:boolean){
    this.getListAll().forEach((todo) => {
      todo.setCompleted(completed);
    });
  }

  private status = TodoStatusType.All;
  todoStatusType = TodoStatusType;


}
