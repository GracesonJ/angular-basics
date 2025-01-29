import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() username:string = ""

  @Output() onAlert = new EventEmitter()

  executeEvent(){
    this.onAlert.emit("Data from Child")
  }
}
 