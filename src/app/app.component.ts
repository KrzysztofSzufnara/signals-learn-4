import { Component, effect, viewChild, viewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SignalCounterComponent } from './sinal-counter/sinal-counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SignalCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'signals-learn-4';
  parentCounter = 0;
  childCounter = viewChildren(SignalCounterComponent);

  constructor() {
    effect(() => {
      console.log('effect triggered', this.childCounter());
    });
  }

  incrementChildCounter() {
    this.childCounter()?.forEach((c) => c.counter.update((c) => c + 10));
    console.log('incrementChildCounter', this.childCounter());
  }
}
