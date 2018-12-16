import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {NgsRevealModule} from 'ngx-scrollreveal';
import { FormsModule }   from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    
    
  ],
  imports: [
    ScrollToModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgsRevealModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#f3fbff",
      "backgroundStrokeWidth": 50,
      "radius": 45,
      "space": -6,
      "toFixed": 0,
      "maxPercent": 100,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#00e4ff",
      "innerStrokeColor": "#c4f8ff",
      "innerStrokeWidth": 8,
      "titleColor": "#5e5e5e",
      "titleFontSize": "14",
      "animateTitle": true,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "responsive": true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
