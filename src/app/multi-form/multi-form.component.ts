import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { order } from "../model/order.model";

@Component({
  selector: 'app-multi-form',
  templateUrl: './multi-form.component.html',
  styleUrls: ['./multi-form.component.css']
})
export class MultiFormComponent implements OnInit {

  
  constructor(private _fb: FormBuilder) { }
  public addmore: FormGroup;

  ngOnInit() {
    this.addmore = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()])
    });
  }
  get formArr() {
    return this.addmore.get('itemRows') as FormArray;
  }

  onSubmit() {
    console.log(this.addmore.get('itemRows'));
  }

  initItemRows() {
    return this._fb.group({
      order: [''],
      rule: [''],
    });
  }
  addNewRow() {
    this.formArr.push(this.initItemRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

}
