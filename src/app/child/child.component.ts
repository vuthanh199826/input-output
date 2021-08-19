import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  item: string;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  sendItem(value: string) {
   this.newItemEvent.emit(value);
  }

}
