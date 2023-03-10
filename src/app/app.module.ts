import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { ChartsComponent } from './components/charts/charts.component';
import { CandleComponent } from './components/candle/candle.component';
import { HomeComponent } from './home/home/home.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;


@NgModule({
  declarations: [
    AppComponent,
    CanvasJSChart,
    NavBarComponent,
    ChartsComponent,
    CandleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
