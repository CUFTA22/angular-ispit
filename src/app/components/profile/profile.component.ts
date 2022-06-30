import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, Subject, take, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnDestroy, OnInit {
  public loginValid = true;

  public email = '';
  public password = '';
  public address = '';
  public firstName = '';
  public lastName = '';
  public phone = '';

  private _destroySub$ = new Subject<void>();
  private readonly returnUrl: string;

  constructor(
    private _route: ActivatedRoute,
    private _authService: AuthService
  ) {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/game';
  }

  public ngOnDestroy(): void {
    this._destroySub$.next();
  }

  public ngOnInit(): void {
    const user = this._authService.getCurrentUser();

    this.email = user.email;
    this.address = user.address;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.phone = user.phone;
  }

  public onSubmit(): void {
    this.loginValid = true;

    this._authService.update(
      this.email,
      this.password,
      this.address,
      this.firstName,
      this.lastName,
      this.phone
    );
  }
}
