import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list';

  //of type any because
  list:any[]=[]

  //to add items to the list
  addToDo(item:string){
    console.warn(item);
    this.list.push({id:this.list.length, name:item});

  }

  removeTask(id:number){
    console.warn(id);
    this.list=this.list.filter(item=>item.id!==id);
  }
}
