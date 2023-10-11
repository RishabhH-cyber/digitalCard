import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './components/homePageComponent/HomePageComponentComponent';
const routes: Routes = [
      {
        path: 'home', component: HomePageComponent
    },
    { path: '', redirectTo: 'HomePageComponent', pathMatch: 'full' },
    { path: '**', redirectTo: 'HomePageComponent' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
