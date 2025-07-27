import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/components/data-table/data-table').then(
        (m) => m.DataTable
      ),
  },
];
