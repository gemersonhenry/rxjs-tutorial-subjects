import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface IUser {
  id: number;
  name: string;
  age: number;
}

@Injectable()
export class SubjectService {

  private nameSubject = new Subject<string>();
  public name$ = this.nameSubject.asObservable();

  private userSubject = new Subject<IUser>();
  public user$ = this.userSubject.asObservable();

  constructor() { }

  public updateNameSubject(name: string): void {
    this.nameSubject.next(name);
  }

  public updateUserSubject(user: IUser): void {
    this.userSubject.next(user);
  }
}
