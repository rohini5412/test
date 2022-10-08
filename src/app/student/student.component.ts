import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component,Input,Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() myinput:string;
  @Output() myoutput:EventEmitter<string>=new EventEmitter();
  oupputdata="Hii i m child data";


  constructor() { }


  ngOnInit(): void {
    console.log(this.myinput);
    
    }
    senddata(){
      this.myoutput.emit(this.oupputdata);

  }


}
