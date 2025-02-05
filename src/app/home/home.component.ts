import { DatePipe, NgClass, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppendPipe } from '../pipes/append.pipe';
import { ApiService } from '../services/api.service';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, NgIf, NgFor, FormsModule, DatePipe, AppendPipe, UpperCasePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title:string = "Basic Concepts in Angular"
  imgUrl: string = "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
  titleColor:string = "red"
  count:number = 0
  username:string = ""
  styleClass:string = "pStyle textColor"
  userList:string[] = ["Alan", "Alex", "John", "Mark", "Jerin","Johny"]
  UserAddress:string = "XYZ KL 652696"
  // -------------------------------------
  userStatus:boolean = false
  today:Date = new Date()

  // --------------------------------

  allPost:Post[] = []

  constructor(private api:ApiService){}

  ngOnInit(){
    this.showPost( )
  }

  showPost(){
    this.api.getAllPost().subscribe((res:Post[])=>{
      console.log(res);
      this.allPost = res
      
    })
  }

  increment(){
    this.count++
  }

  showAlert(data:string){
    alert(data)
  }

  getUsername(event:any){
    console.log(event.target);
    this.username = event.target.value
    
  }

  getUser(tag:any){
    if(tag.value){
      alert(`Designation : ${tag.value}`)
    }else{
      alert(`Fill the Form`)
    }
  }

  showService(){
    alert(this.api.servicedata)
  }




}
