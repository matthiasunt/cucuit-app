import {Injectable} from '@angular/core';
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly uid: string;

  constructor() {
    const storedUid = localStorage.getItem('cucuit-uid');
    if (storedUid && storedUid.length > 0) {
      this.uid = storedUid;
    } else {
      this.uid = uuidv4();
      localStorage.setItem('cucuit-uid', this.uid);
    }
  }

  getUid(): string {
    return this.uid;
  }

}
