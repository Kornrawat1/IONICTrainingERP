import { Platform } from '@ionic/angular';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { of, from } from 'rxjs';

const ACCESS_TOKEN = 'authentication-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  loggedInUser: User;

  constructor(
    private storage: StorageService,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.isAuthenticated();
    });
  }

  getCurrentUser() {
    return of(this.loggedInUser);
  }

  register(user: User) {
    const result = this.storage.set('token', ACCESS_TOKEN).then(() => {
          this.storage.set(user.username, user);
          this.isLoggedIn = true;
          this.loggedInUser = user;
          return this.loggedInUser;
        },
        error => {
          console.error('Error Registration. ', error);
          this.isLoggedIn = false;
          return null;
        });
    return from(result);
  }

  login(username: string, password: string) {
    this.storage.get(username).then(data => {
      console.log('username: ', username);
      console.log('password', password);
      if (data) {
        console.log(data);
        if (data.username === username && data.passwordGroup.password === password) {
          this.loggedInUser = data;
          this.isLoggedIn = true;
          this.storage.set('token', ACCESS_TOKEN);
        } else {
          console.error('Invalid username or password');
        }
      } else {
        console.error('Invalid username');
      }
    },
    error => {
      this.loggedInUser = null;
      this.isLoggedIn = false;
      console.log('Error logging in ', error);
    });

    // Normally you would have a real user object at this point
    return of(this.loggedInUser);
  }

  logout() {
    this.storage.remove('token');
    this.isLoggedIn = false;
    this.loggedInUser = null;
  }

  isAuthenticated() {
    return this.isLoggedIn &&
            this.storage.get('token') &&
            this.storage.get(this.loggedInUser.username);
  }
}
