import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule  } from 'ngx-owl-carousel-o';
import { HomePageComponentComponent } from './components/homePageComponent/home-page-component.component';
import { SharedCarouselComponent } from './components/shared-carousel/shared-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponentComponent,
    SharedCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
