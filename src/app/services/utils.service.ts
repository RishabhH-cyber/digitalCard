import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private usernameSource = new BehaviorSubject<string>(''); // Initial value is an empty string
  currentUsername = this.usernameSource.asObservable();

  constructor() { }

  updateUsername(newUsername: string) {
    this.usernameSource.next(newUsername);
  }
}
