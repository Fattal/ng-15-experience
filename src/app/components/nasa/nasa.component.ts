import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {Component} from '@angular/core';
import {map} from 'rxjs/operators';
import {getApod} from '../../services/nasa-api/nasa-apod';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.less'],
  standalone: true,
  imports: [CommonModule],
})
export class NasaComponent {
  apod$ = getApod();
  description$ = this.apod$.pipe(map(data => (data as any)?.explanation));
  src$ = this.apod$.pipe(map(data => (data as any)?.hdurl));
}
