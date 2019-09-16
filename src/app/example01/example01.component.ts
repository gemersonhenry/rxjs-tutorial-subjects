import { Component, OnInit, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'fp-example01',
  templateUrl: './example01.component.html',
  styleUrls: ['./example01.component.scss']
})
export class Example01Component implements OnInit {

  // In this example we will use the filter operator

  public keyPressSubject = new Subject<string>();
  public keyPress$ = this.keyPressSubject.asObservable();

  public key = '';

  @HostListener('document:keypress', ['$event'])
  public printOnlyNumber($event: KeyboardEvent) {
    const key = $event.key;
    console.log(key);
  }

  @HostListener('document:click', ['$event'])
  public clickElement($event: MouseEvent) {
    const x = $event.clientX;
    const y = $event.clientY;
    console.log(x, y);
  }

  constructor() { }

  ngOnInit() {
  }

}
