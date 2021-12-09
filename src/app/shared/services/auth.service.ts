import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFireDatabase} from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string | any;

  constructor(
    private store: AngularFirestore,
    private auth: AngularFireAuth,
    private database: AngularFireDatabase,
    private router: Router
  ) { }

  isAuthenticated(): boolean{
    return !!this.token;
  }

  login({email, password}: any) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.auth.idToken.subscribe((res) => {
          this.token = res;
          localStorage.setItem('authToken', JSON.stringify(this.token));
          this.setToken(this.token);
          this.router.navigate(['/admin']);
        });
      });
  }

  getToken(): string {
    return this.token;
  }

  setToken(uid: string | any) {
    this.token = uid;
  }

  logout() {
    this.auth.signOut().then(() => this.setToken(null));
    localStorage.clear();
  }
}
