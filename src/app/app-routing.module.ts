import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NasaComponent} from './components/nasa/nasa.component';
import {Observable} from 'rxjs';

function isLoggedIn(type: string[]): boolean | Observable<boolean> {
  return true;
}

const routes: Routes = [
  { path: 'nasa', component: NasaComponent, /*canActivate: [isLoggedIn(['LOGGED_IN'])]*/ }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
