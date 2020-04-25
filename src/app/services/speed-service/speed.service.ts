import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeedService {
  speed: BehaviorSubject<number>;

  timerId: any;

  time = 0;
  timeStep = 0.1;
  clicksPerStep = 0;

  clicksStep1 = 0;
  clicksStep2 = 0;
  clicksStep3 = 0;
  clicksStep4 = 0;
  clicksStep5 = 0;
  clicksStep6 = 0;
  clicksStep7 = 0;
  clicksStep8 = 0;
  clicksStep9 = 0;

  constructor() {
    this.speed = new BehaviorSubject<number>(0);
  }

  increaseClicks() {
    this.clicksPerStep++;
  }

  resetClicks() {
    this.clicksPerStep = 0;
  }

  changeStepsValues(currentStep: number) {
    this.clicksStep9 = this.clicksStep8;
    this.clicksStep8 = this.clicksStep7;
    this.clicksStep7 = this.clicksStep6;
    this.clicksStep6 = this.clicksStep5;
    this.clicksStep5 = this.clicksStep4;
    this.clicksStep4 = this.clicksStep3;
    this.clicksStep3 = this.clicksStep2;
    this.clicksStep2 = this.clicksStep1;
    this.clicksStep1 = currentStep;
  }

  sumSteps(currentStep: number) {
    return this.clicksStep9
      + this.clicksStep8
      + this.clicksStep7
      + this.clicksStep6
      + this.clicksStep5
      + this.clicksStep4
      + this.clicksStep3
      + this.clicksStep2
      + this.clicksStep1
      + currentStep;
  }

  startCalculateSpeed() {
    this.timerId = setInterval(() => {
      this.speed.next(parseFloat(this.sumSteps(this.clicksPerStep).toFixed(2)));

      this.time += this.timeStep;

      this.changeStepsValues(this.clicksPerStep);
      this.resetClicks();
    }, this.timeStep * 1000);
  }

  stopCalculateSpeed() {
    setTimeout(() => {
      this.speed.next(0);
      clearInterval(this.timerId);
    }, 1000);
  }

  getSpeed(): Observable<number> {
    return this.speed.asObservable();
  }
}
