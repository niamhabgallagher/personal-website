import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabLinksPage } from './tab-links.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TabLinksPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'about-me',
        loadChildren: () => import('../about-me/about-me.module').then(m => m.AboutMePageModule)
      },
      {
        path: 'what-i-do',
        loadChildren: () => import('../what-i-do/what-i-do.module').then(m => m.WhatIDoPageModule)
      },
      {
        path: 'education',
        loadChildren: () => import('../education/education.module').then(m => m.EducationPageModule)
      },
      {
        path: 'experience',
        loadChildren: () => import('../experience/experience.module').then(m => m.ExperiencePageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact.module').then(m => m.ContactPageModule)
      },
      {
        path: '',
        redirectTo: '/tablinks/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tablinks/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabLinksPageRoutingModule {}
