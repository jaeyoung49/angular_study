import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'taxi-component',
  template: `taxi Component : {{s.message}} <button (click)="s.message='taxi'">선택</button>`
})
export class TaxiComponent {
  constructor(public s: SharedService) {}
}
