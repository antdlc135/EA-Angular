import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ea-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
}
