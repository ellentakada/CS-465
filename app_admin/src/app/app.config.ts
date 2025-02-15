import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { authIntercepProvider } from './utils/jwt.interceptor.spec';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(),
    importProvidersFrom(HttpClientModule),
    authIntercepProvider
  ]
};
