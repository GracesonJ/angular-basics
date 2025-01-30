import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [UserComponent, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  email:string = ""
  password:string = ""
  data:string = 'Graceson J'

  showAlert(event:string){
    alert(event)
  }

  login(){
    alert(`Email : ${this.email}
      Password : ${this.password} `)
  }
}
