import { literalMap } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class TodoListService {
  private list: string[] = []
  //  新增代辦事項
  add(title: string): void {
    if (title || title.trim()) {
      this.list.push(title);
    }
  }

  getList(): string[] {
    return this.list;
  }
  constructor() { }
}
