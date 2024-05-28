import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule

import { routes } from './app.routes';
import { AsyncPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    importProvidersFrom([HttpClientModule, BrowserAnimationsModule, AsyncPipe]),
  ],
};
