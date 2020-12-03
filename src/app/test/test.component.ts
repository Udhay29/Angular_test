import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { BroadcastService } from '../broadcast.service';
import { FormGroup, FormControl, FormArray, FormBuilder, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data: any;
  customform: FormGroup;
  constructor( private readonly service: TestService, private readonly broadcastService: BroadcastService,
     private readonly formBuilder: FormBuilder
    ) {
    this.customform = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
      cusformarray: new FormArray([])
    });
  }

  ngOnInit() {
    this.service.getData().subscribe(data => {
      this.data = data;
      this.broadcastService.broadcast('tableDetails', data);
    });
  }
  click() {
    this.broadcastService.on<any>('tableDetails').subscribe((data) => {
      console.log(data);
    });
    (this.customform.controls.cusformarray as FormArray).push(this.formArrayContent());
  }
  formArrayContent() {
    return new FormGroup({
      address1: new FormControl(''),
      address2: new FormControl('')
    });
  }
  gotit(event: any) {
    console.log(event);
  }
  val() {
      console.log(this.customform.controls);
  }
  pati(event: any) {
    console.log(event);
  }

}
