import {Routes} from '@angular/router';
import {Observable, of} from 'rxjs';

function isLoggedIn(type: string[]): Observable<boolean> {
  return of(true);
}

export const routes: Routes = [
  {
    path: 'nasa',
    loadComponent: () => import('./components/nasa/nasa.component').then(c => c.NasaComponent),
    // canActivate: [isLoggedIn(['LOGGED_IN'])],
  }
];
