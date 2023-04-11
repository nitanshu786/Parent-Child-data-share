import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(){}
@Input() myname:string='';
@Input() myarray:string[]=[];
@Input() myobj:any={};

  ngOnInit(): void {
    
  }
}
