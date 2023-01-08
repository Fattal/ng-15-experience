import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient, HttpParams, HttpParamsOptions, HttpRequest} from '@angular/common/http';
import {filter, map} from 'rxjs/operators';


export const NASA_API_KEY = new InjectionToken<string>('dtPCmDZ7axUFtMTnqaT9603a3UJRcjpDAm9mElrM');
@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  constructor(
    private http: HttpClient,
    @Inject(NASA_API_KEY) private apiKey: string,
  ) { }

  public getApod() {
    return this.get('https://api.nasa.gov/planetary/apod');
  }

  private get(url: string) {
    const params = new HttpParams().set('api_key', this.apiKey);
    const request = new HttpRequest('GET', url, { params });
    return this.http.request(request)
      .pipe(
        map(data => (data as any)?.body),
        filter(Boolean),
      );
  }
}
