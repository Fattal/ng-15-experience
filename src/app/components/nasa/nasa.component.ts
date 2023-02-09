import {CommonModule} from '@angular/common';
import { Component, inject } from '@angular/core';
import { shareReplay } from 'rxjs';
import { map } from 'rxjs/operators';
import { getApod } from '../../services/nasa-api/nasa-apod';
import { BitmexService } from 'src/app/services/binance/binance-api';

@Component({
  selector: 'app-nasa',
  template: `
    <div class="img-container" *ngIf="(messages$ | async)">
      <img [alt]="description$ | async" [src]="src$ | async" />
    </div>
    <p>{{ description$ | async }}</p>
  `,
  styles: [`
    .img-container {
      padding: 1rem;

      img {
        width: calc(100vw - 2 * 1rem);
      }
    }
  `],
  standalone: true,
  imports: [CommonModule],
})
export class NasaComponent {
  apod$ = getApod().pipe(shareReplay(1));
  description$ = this.apod$.pipe(map(data => (data as any)?.explanation));
  src$ = this.apod$.pipe(map(data => (data as any)?.hdurl));
  messages$ = inject(BitmexService).messages$;
}
