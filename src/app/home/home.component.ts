import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title:string = "Basic Concepts in Angular"
  imgUrl: string = "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
  titleColor:string = "red"
  count:number = 0

  increment(){
    this.count++
  }

  showAlert(data:string){
    alert(data)
  }
}
