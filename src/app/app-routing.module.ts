import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {KapitelComponent} from './kapitel/kapitel.component';
import {Inhalt11Component} from './kapitel-inhalt-1/inhalt11/inhalt11.component';
import {Inhalt12Component} from './kapitel-inhalt-1/inhalt12/inhalt12.component';

const routes: Routes = [
  {
    path: 'kapitel1',
    component: KapitelComponent,
    children: [
      {
        path: '',
        redirectTo: 'inhalt11',
        pathMatch: 'full'
      },
      {
        path: 'inhalt11', component: Inhalt11Component
      },
      {
        path: 'inhalt12', component: Inhalt12Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
