import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TimerService } from '../timer-service/timer.service';

@Injectable({
  providedIn: 'root'
})
export class ClicksService {
  totalClicks: BehaviorSubject<number>
  averageClicks: BehaviorSubject<number>

  totalTime: number

  constructor(private timerService: TimerService) {
    this.totalClicks = new BehaviorSubject<number>(0)
    this.averageClicks = new BehaviorSubject<number>(0)

    this.timerService.getTotalTime().subscribe(time => this.totalTime = time)
  }

  increaseClicks() {
    this.totalClicks.next(this.totalClicks.getValue() + 1)
  }

  resetClicks() {
    this.totalClicks.next(0)
  }

  changeAverage() {
    const average = this.totalClicks.getValue() / this.totalTime

    this.averageClicks.next(average)
  }

  getTotalClicks(): Observable<number>{
    return this.totalClicks.asObservable()
  }

  getAverageClicks(): Observable<number>{
    return this.averageClicks.asObservable()
  }
}
