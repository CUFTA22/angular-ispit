import { Injectable } from '@angular/core';
import { UserModel } from '../models/user';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  USERS_TABLE: UserModel[] = [
    {
      email: 'admin@test.com',
      address: 'First Street',
      firstName: 'Ben',
      lastName: 'Dover',
      id: 1,
      password: 'test',
      phone: '123219422',
    },
  ];

  currentUser: UserModel = null;

  constructor(private snackBarService: SnackBarService) {}

  getCurrentUser(): UserModel {
    return this.currentUser;
  }

  logIn(email: string, password: string) {
    const foundUser = this.USERS_TABLE.find((u) => u.email === email);

    if (!foundUser) return this.snackBarService.openSnackBar('User not found');

    const matchPassword = foundUser.password === password;

    if (!matchPassword)
      return this.snackBarService.openSnackBar('Incorrect password');

    this.currentUser = foundUser;
  }

  register(
    email: string,
    password: string,
    address: string,
    firstName: string,
    lastName: string,
    phone: string
  ) {
    const newUser: UserModel = {
      id: this.USERS_TABLE[this.USERS_TABLE.length].id + 1,
      address,
      email,
      password,
      firstName,
      lastName,
      phone,
    };

    this.USERS_TABLE.push(newUser);
    this.currentUser = newUser;
  }

  update(
    email: string,
    password: string,
    address: string,
    firstName: string,
    lastName: string,
    phone: string
  ) {
    const updateFields = {
      address,
      email,
      password,
      firstName,
      lastName,
      phone,
    };

    this.USERS_TABLE.map((u) => {
      if (u.email === email) {
        return { ...u, ...updateFields };
      } else {
        return u;
      }
    });
  }
}
