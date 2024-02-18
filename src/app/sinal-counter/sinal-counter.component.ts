import { Component, model, viewChild } from '@angular/core';

@Component({
  selector: 'app-signal-counter',
  standalone: true,
  imports: [],
  templateUrl: './sinal-counter.component.html',
  styleUrl: './sinal-counter.component.css',
})
export class SignalCounterComponent {
  counter = model(0);

  increment() {
    this.counter.update((c) => c + 1); // this.counter++;
  }
}
