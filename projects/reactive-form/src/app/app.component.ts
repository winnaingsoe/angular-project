import { Component } from '@angular/core';
import { FormControl, FormGroup, SelectControlValueAccessor, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  form:FormGroup
  list:any[] = []

  constructor() {
    this.form = new FormGroup({
      name : new FormControl,
      price: new FormControl,
      description: new FormControl,
      stock: new FormControl
    })
  }

  onSave() {
    this.form.value;
  }

  this.form = builder.group({
    name:['', Validators.required],
    price:[0, Validators.min(1)],
    description:[''],
    stock: [false]
  });

  setValue(data:any)

}
