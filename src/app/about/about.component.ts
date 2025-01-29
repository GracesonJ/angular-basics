import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  data:string = 'Graceson J'

  showAlert(event:string){
    alert(event)
  }
}
