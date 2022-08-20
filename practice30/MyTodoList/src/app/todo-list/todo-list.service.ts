import { literalMap } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';


@Injectable({
  providedIn: 'root'
})



export class TodoListService {
  private list: Todo[] = []
  //  新增代辦事項
  add(title: string): void {
    if (title || title.trim()) {
      this.list.push(new Todo(title));
    }
  }

  getList(): Todo[] {
    return this.list;
  }
  
  constructor() { }

  remove(index:number):void{
    this.list.splice(index,1);
  }

  getWithCompleted(completed:boolean):Todo[]{
    return this.list.filter(todo => todo.done === completed);
  }

  removeCompleted():void{
    this.list= this.getWithCompleted(false);
  }

}
