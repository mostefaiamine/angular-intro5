import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/authentication/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  cUserName: FormControl;

  cPassword: FormControl;

  form: FormGroup;

  constructor(private $fb: FormBuilder, private $router: Router, private $ser: AuthenticationService) { }

  ngOnInit() {
    this.cUserName = this.$fb.control(null, [Validators.required]);
    this.cPassword = this.$fb.control(null, [Validators.required]);
    this.form = this.$fb.group({
      username: this.cUserName,
      cPassword: this.cPassword
    });
    this.form.valueChanges.subscribe(s => this.form.setErrors(null));
  }

  submit() {
    if (this.$ser.signin(this.cUserName.value, this.cPassword.value)) {
      this.$router.navigate(['/logged']);
    } else {
      this.form.setErrors({
        login: true
      });
    }
  }

}
