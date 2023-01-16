import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { ChartLineComponent } from './chart-line/chart-line.component';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { ChartCandleComponent } from './chart-candle/chart-candle.component';
import { ChartShowComponent } from './chart-show/chart-show.component';


@NgModule({
  declarations: [    
    ChartBarComponent,
    ChartLineComponent,
    ChartPieComponent,
    ChartCandleComponent,
    ChartShowComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule
  ]
})
export class ChartsModule { }
