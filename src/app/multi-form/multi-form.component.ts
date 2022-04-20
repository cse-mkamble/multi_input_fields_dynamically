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

  isorderEditable = false;

  ngOnInit() {

    this.addmore = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()])
    });

    console.log(this.addmore);

  }

  get formArr() {
    return this.addmore.get('itemRows') as FormArray;
  }

  onSubmit() {
    console.log(this.addmore.get('itemRows'));
  }

  initItemRows() {
    return this._fb.group({
      order: '',
      rule: '',
    });
  }

  addNewRow() {
    this.formArr.push(this.initItemRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

  editorder() {
    this.isorderEditable = true;

    this.addmore = this._fb.group({
      itemRows: this._fb.array(
        this.values.map((x) =>
          this._fb.group({
            order: this._fb.control(x.order),
            rule: this._fb.control(x.rule),
          })
        )
      ),
    });

    console.log(this.addmore);

  }

  cancelorder() {
    this.isorderEditable = false;
  }




  values = [
    {
      order: "14",
      rule: "6"
    },
    {
      order: "21",
      rule: "2"
    },
  ];


}
