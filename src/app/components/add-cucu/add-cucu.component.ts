import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-cucu',
  templateUrl: './add-cucu.component.html',
  styleUrls: ['./add-cucu.component.scss']
})
export class AddCucuComponent implements OnInit {

  private form: FormGroup = this.formBuilder.group({
    quantity: [1, Validators.required],
    email: ['', [Validators.required]],
    agreeWithPrivacyPolicy: [false, Validators.requiredTrue],
  });

  date = '';

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  handleDateChange(event) {
    console.log(event);
  }

}
