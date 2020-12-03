import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
   @Input() set parentdata(val: any) {
    console.log(val);
  }
  @Input() set prochild(val: any) {
    console.log(val);
  }
  @Output() childtoparent: EventEmitter<any> = new EventEmitter<any>();
  @Output() ctop: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  ngOnInit() {
    this.childtoparent.emit('hii');
    this.ctop.emit('Michael Jackson');
  }

}
