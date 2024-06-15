import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./home/home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'photography',
    loadComponent: () =>
      import('./photography/photography/photography.component').then(
        (mod) => mod.PhotographyComponent
      ),
  },
  {
    path: 'aboutus',
    loadComponent: () =>
      import('./aboutus/aboutus/aboutus.component').then(
        (mod) => mod.AboutusComponent
      ),
  },
];
