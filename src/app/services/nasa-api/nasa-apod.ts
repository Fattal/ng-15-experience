import {inject} from '@angular/core';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export function getApod(): Observable<any> {
  return get('https://api.nasa.gov/planetary/apod');
}

export function get(url: string): Observable<any> {
  const http = inject(HttpClient);
  const params = new HttpParams().set('api_key', 'dtPCmDZ7axUFtMTnqaT9603a3UJRcjpDAm9mElrM');
  const request = new HttpRequest('GET', url, { params });
  return http.request(request)
    .pipe(
      map(data => (data as any)?.body),
      filter(Boolean),
    );
}
