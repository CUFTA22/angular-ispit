import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: UserModel;

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.user = this._authService.getCurrentUser();
  }
}
