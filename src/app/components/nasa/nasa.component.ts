import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {map} from 'rxjs/operators';
import {getApod} from '../../services/nasa-api/nasa-apod';
import { BitmexService } from 'src/app/services/binance/binance-api';
import { componentDestroy$ } from 'src/app/common/component-destroy';

@Component({
  selector: 'app-nasa',
  template: `
    <div class="img-container">
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
  apod$ = getApod();
  description$ = this.apod$.pipe(map(data => (data as any)?.explanation));
  src$ = this.apod$.pipe(map(data => (data as any)?.hdurl));
  messages$ = this.bitmex.messages$;

  constructor(private bitmex: BitmexService) {
    this.messages$.pipe(componentDestroy$()).subscribe();
  }
}
