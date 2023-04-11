import { Component,  OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  @Output() public childevent= new EventEmitter();
  fire()
  {
    this.childevent.emit("child to parent event fire")
  }
  constructor(){}

  ngOnInit(): void {
    
  }

}
