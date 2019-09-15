import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject, interval, Subscription } from 'rxjs';

@Component({
  selector: 'fp-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.scss']
})
export class ConceptsComponent implements OnInit {

  public currentSubject = new Subject();
  public currentBehaviorSubject = new BehaviorSubject(0);
  public currentReplaySubject = new ReplaySubject();
  public currentAsyncSubject = new AsyncSubject();

  public currentTimer$ = interval(3000);

  public subjectEmittedValues = [];
  public behaviorSubjectEmittedValues = [];
  public replaySubjectEmittedValues = [];
  public asyncSubjectEmittedValues = [];

  // private subjectSubscription: Subscription;
  // private behaviorSubjectSubscription: Subscription;
  // private replaySubjectSubscription: Subscription;
  // private asyncSubjectSubscription: Subscription;

  constructor() {
    this.subjectObserver = this.subjectObserver.bind(this);
    this.behaviorSubjectObserver = this.behaviorSubjectObserver.bind(this);
    this.replaySubjectObserver = this.replaySubjectObserver.bind(this);
    this.asyncSubjectObserver = this.asyncSubjectObserver.bind(this);
  }

  ngOnInit() {
    this.currentTimer$.subscribe((time) => {
      this.currentSubject.next(time);
      this.currentBehaviorSubject.next(time);
      this.currentReplaySubject.next(time);
      this.currentAsyncSubject.next(time);
    });
  }

  public subscribeSubjectObserver() {
    this.currentSubject
      .subscribe(this.subjectObserver);
  }

  public subscribeBehaviorSubjectObserver() {
    this.currentBehaviorSubject
      .subscribe(this.behaviorSubjectObserver);
  }

  public subscribeReplaySubjectObserver() {
    this.currentReplaySubject
      .subscribe(this.replaySubjectObserver);
  }

  public subscribeAsyncSubjectObserver() {
    this.currentAsyncSubject
      .subscribe(this.asyncSubjectObserver);
  }

  public completeAsyncSubjectObserver() {
    this.currentAsyncSubject.complete();
  }

  private subjectObserver(time: number) {
    this.subjectEmittedValues.push(time);
  }

  private behaviorSubjectObserver(time: number) {
    this.behaviorSubjectEmittedValues.push(time);
  }

  private replaySubjectObserver(time: number) {
    this.replaySubjectEmittedValues.push(time);
  }

  private asyncSubjectObserver(time: number) {
    this.asyncSubjectEmittedValues.push(time);
  }

}
