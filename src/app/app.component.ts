import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentcommunication';
parentdata = "Hii i m parent component";
constructor(){

}
getdata(value){
  console.log(value);
  
}
}
