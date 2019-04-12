import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/core/user.service';
import { User } from 'src/app/core/models/user';
import { first } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';
@Component({
  selector: 'cwg-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  private _isSubmitted: boolean;
  signupForm: FormGroup;
  $users: Observable<User[]>;

  get form() {
    return this.signupForm.controls;
  }

  get isSubmitted(): boolean {
    return this._isSubmitted;
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService) { }

  ngOnInit() {
    this.signupForm = this._formBuilder.group({
      username: ['', Validators.required ]
    });

    timer(0, 5000).subscribe(_ => {
      this.$users = this.getAllUsers();
    });
  }

  onSubmit() {
    this._isSubmitted = true;
    if (this.signupForm.invalid) {
      console.log(`Username field is invalid`);
      return;
    }

    console.log(this.signupForm.value);
    const username = this.signupForm.value;

    this._userService.addUser( username)
      .pipe(first())
      .subscribe((data) => console.log(data));
  }

  private getAllUsers(): Observable<User[]> {
    return this._userService.getAllUsers();
  }
}
