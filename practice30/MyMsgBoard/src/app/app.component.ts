import { Component } from '@angular/core';
import { Message }  from './message'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './bootstrap.min.css']
})
export class AppComponent {
  //title = 'MyMsgBoard';
  //add
  name='';
  content='';

  messages: Message[] = [];

  addMessage(): void{
    if(!this.name.trim() || !this.content.trim()){
      return;
    }
    const message = new Message(this.name, this.content);
    this.messages.push(message);
    this.content = '';
  }
}
