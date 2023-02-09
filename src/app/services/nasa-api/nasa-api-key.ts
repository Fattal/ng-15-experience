import {InjectionToken} from '@angular/core';

export const NASA_API_KEY = new InjectionToken<string>('', {
  providedIn: 'root',
  factory() { return 'dtPCmDZ7axUFtMTnqaT9603a3UJRcjpDAm9mElrM'; }
});
