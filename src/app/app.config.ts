import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideHttpClient } from '@angular/common/http';
import { provideFormlyCore } from '@ngx-formly/core'
import { withFormlyPrimeNG } from '@ngx-formly/primeng';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideFormlyCore(withFormlyPrimeNG()),
    providePrimeNG({
      theme: {
        preset: Aura,
         options: {
            darkModeSelector: false || 'none',
             cssLayer: {
                name: 'primeng',
                order: 'theme, base, primeng'
            }
        }
      },
    }),
  ],
};
