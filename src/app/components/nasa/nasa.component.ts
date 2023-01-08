import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NASA_API_KEY, NasaApiService} from '../../services/nasa-api/nasa-api.service';
import {HttpClientModule} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.less'],
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [
    NasaApiService,
    { provide: NASA_API_KEY, useValue: 'uNimEIztE8Z91BpQW7uPeTgSUdYHsLivYXuwO5Q3' },
  ],
})
export class NasaComponent {

  apod$ = this.nasaService.getApod();

  description$ = this.apod$.pipe(map(data => { debugger; return (data as any)?.explanation; }));
  src$ = this.apod$.pipe(map(data => (data as any)?.hdurl));

  constructor(
    private nasaService: NasaApiService,
  ) {}
}
