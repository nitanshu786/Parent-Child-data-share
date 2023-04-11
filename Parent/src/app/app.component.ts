import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Parent';
  msg="";
  name="Nitin"
  arr=["banana", "Mango", "Apple","PineApple"]
  obj={
    name :"nitin",
    address:"Una",
    email:"Nitin@gmail.com",
    ph: 989898989
  }
}
