import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponentComponent} from './components/homePageComponent/home-page-component.component'
const routes: Routes = [
      {
        path: 'home', component: HomePageComponentComponent
    },
    { path: '', redirectTo: 'HomePageComponent', pathMatch: 'full' },
    { path: '**', redirectTo: 'HomePageComponent' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
