import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLoggedIn = false;
  private currentUser: User;

  constructor(private nativeStorage: NativeStorage) { }

  async login(username: string, password: string) {
    try {
      const data = await this.nativeStorage.getItem('auth');
      if (data) { this.currentUser = data; this.isLoggedIn = true; }
      return this.currentUser;
    } catch (error) {
      this.isLoggedIn = false;
      console.log(error);
    }
  }

  async register(user: User) {
    await this.nativeStorage.setItem('auth', {
      username: user.username,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName
    });
  }

}
