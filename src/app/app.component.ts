import { Component, OnInit } from '@angular/core';

import { Todo } from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Project Crash';
  
  todoValue: string;
  list: Todo[]; 
  constructor (){
    this.todoValue=''
    this.list=[]
  }

  ngOnInit(){
    this.list = [];
    this.todoValue = "";
  }

  addItem(){
    if(this.todoValue != "") {
      const newItem: Todo = {
        id : Date.now(),
        value : this.todoValue,
        isDone : false
      };
      this.list.push(newItem);
    }
    this.todoValue = "";
  }

   deleteItem(id: number){
     this.list = this.list.filter(item => item.id !== id);
   }
}
