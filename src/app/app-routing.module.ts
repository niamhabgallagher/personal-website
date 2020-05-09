import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about-me',
    loadChildren: () => import('./about-me/about-me.module').then( m => m.AboutMePageModule)
  },
  {
    path: 'what-i-do',
    loadChildren: () => import('./what-i-do/what-i-do.module').then( m => m.WhatIDoPageModule)
  },
  {
    path: 'education',
    loadChildren: () => import('./education/education.module').then( m => m.EducationPageModule)
  },
  {
    path: 'experience',
    loadChildren: () => import('./experience/experience.module').then( m => m.ExperiencePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
