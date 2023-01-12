### Repositório Oficial do Projeto Charts in Tabs | Angular 15 Material



> __Quer conhecer nossos projetos na Udemy?:  **[Acesse aqui](https://www.udemy.com/user/carlos-alberto-dos-santos-34/)**.__


#### *Imagens do Projeto*



![Gráfico de Barras](https://github.com/carlosItDevelop/P2_v1_ChartTabsInAngularMaterial/blob/main/img/grafico-barras.png "Gráfico de Barras")


![Gráfico de Pizza](https://github.com/carlosItDevelop/P2_v1_ChartTabsInAngularMaterial/blob/main/img/grafico-pizza.png "Gráfico de Pizza")


![Gráfico de Linhas](https://github.com/carlosItDevelop/P2_v1_ChartTabsInAngularMaterial/blob/main/img/grafico-linha.png "Gráfico de Linhas")

![Gráfico Financeiro](https://github.com/carlosItDevelop/P2_v1_ChartTabsInAngularMaterial/blob/main/img/grafico-candle.png "Gráfico de Candles")


> index.html

```html
<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <title>Chart with Tabs In Angular Material</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
  <body class="mat-typography">
    <app-root>loading...</app-root>
  </body>
</html
```


> app.component.ts

```typescript
<div class="container">
      <app-nav-bar></app-nav-bar>
      <app-charts></app-charts>
</div>
```


> nav-bar.component.ts

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

}
```

> nav-bar.component.html

```html
<nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Cooperchip</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Quem Somos</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Páginas
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Artigos</a></li>
              <li><a class="dropdown-item" href="#">Projetos</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Fale Conosco</a></li>
            </ul>
          </li>

        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Digite aqui..." aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
```





> chart.component.css

```css
.margem-chart{
    margin-top: 25px;
}
```


> chart.component.ts

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  columnChartOptions = {
    animationEnabled: true,
    title: {
    text: 'Gráfico em Colunas | Angular Material',
    },
    data: [
    {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: 'column',
        dataPoints: [
          { label: 'Java', y: 31},
          { label: 'CSharp', y: 28 },
          { label: 'Python', y: 35 },
          { label: 'Angular', y: 30 },
          { label: 'Asp.Net Core', y: 38 },
          { label: 'React', y: 32 },

        ],
    },
    ],
};

pieChartOptions = {
    animationEnabled: true,
    title: {
    text: 'Gráfico Pizza | Angular Material',
    },
    theme: "dark2"
    data: [
    {
        type: 'pie',
        dataPoints: [
          { label: 'Java', y: 31},
          { label: 'CSharp', y: 28 },
          { label: 'Python', y: 35 },
          { label: 'Angular', y: 30 },
          { label: 'Asp.Net Core', y: 38 },
          { label: 'React', y: 32 },

          ],
    },
    ],
};

lineChartOptions = {
    animationEnabled: true,
    title: {
    text: 'Gráfico em Linha | Angular Material',

    },
    theme: 'light2',
    data: [
    {
        type: 'line',
        dataPoints: [
          { label: 'Java', y: 31},
          { label: 'CSharp', y: 28 },
          { label: 'Python', y: 35 },
          { label: 'Angular', y: 30 },
          { label: 'Asp.Net Core', y: 38 },
          { label: 'React', y: 32 }
          ],
    }
    ],
};
}

```

> chart.component.html

```html

<div class="content">
    <div class="margem-chart">
        <div class="row">
            <div [@.disabled]="true">
                <mat-tab-group dynamicHeight>
                  <mat-tab label="Gráfico de Coluna">
                  <ng-template matTabContent>

                    <canvasjs-chart
                      [options]="columnChartOptions"
                      [styles]="{ width: '100%', height: '460px' }"
                    ></canvasjs-chart>

                  </ng-template>
                </mat-tab>
                <mat-tab label="Gráfico Pizza">
                   <ng-template matTabContent>

                    <canvasjs-chart
                    [options]="pieChartOptions"
                    [styles]="{ width: '100%', height: '460px' }"
                  ></canvasjs-chart>

                   </ng-template>
                </mat-tab>
                <mat-tab label="Gráfico de Linha">
                   <ng-template matTabContent>

                    <canvasjs-chart
                    [options]="lineChartOptions"
                    [styles]="{ width: '100%', height: '460px' }"
                  ></canvasjs-chart>

                   </ng-template>
                 </mat-tab>

                 <mat-tab label="Gráfico Financeiro">
                  <ng-template matTabContent>

                    <app-candle></app-candle>                

                  </ng-template>
                </mat-tab>

               </mat-tab-group>
              </div>
        </div>
    </div>
</div>


```

> candle.component.ts

```Typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-candle',
  templateUrl: './candle.component.html',
  styleUrls: ['./candle.component.css']
})
export class CandleComponent {

  chartOptions = {
    exportEnabled: true, 
    title: {
      text: "Preço da Ethereum",
    },
    axisX: {
      valueFormatString: "MMM",
      crosshair: {
        enabled: true,
        valueFormatString: "MMM YYYY",
        snapToDataPoint: true
      }
    },
    axisY: {
      title: "Preço em USD",
      prefix: "$",
      crosshair: {
        enabled: true
      }
    },
    data:[{
      type: "candlestick",
      yValueFormatString: "$##.##",
      xValueFormatString: "MMM YYYY",
      dataPoints: [
        { x: new Date(2021, 0, 1), y: [737.708374, 1467.784912, 718.109497, 1314.986206] },
        { x: new Date(2021, 1, 1), y: [1314.855225, 2036.286499, 1274.357788, 1416.04895] },
        { x: new Date(2021, 2, 1), y: [1417.151123, 1947.837769, 1416.416138, 1918.362061] },
        { x: new Date(2021, 3, 1), y: [1919.157227, 2797.972412, 1912.178467, 2773.207031] },
        { x: new Date(2021, 4, 1), y: [2772.838379, 4362.350586, 1737.46875, 2714.945313] },
        { x: new Date(2021, 5, 1), y: [2707.560547, 2891.254883, 1707.600586, 2274.547607] },
        { x: new Date(2021, 6, 1), y: [2274.397461, 2551.161133, 1722.050781, 2536.209961] },
        { x: new Date(2021, 7, 1), y: [2530.462891, 3466.992188, 2449.353516, 3433.732666] },
        { x: new Date(2021, 8, 1), y: [3430.762451, 4022.469238, 2676.407471, 3001.678955] },
        { x: new Date(2021, 9, 1), y: [3001.129395, 4455.735352, 2978.654297, 4288.074219] },
        { x: new Date(2021, 10, 1), y: [4288.217285, 4891.70459, 3933.506592, 4631.479004] },
        { x: new Date(2021, 11, 1), y: [4623.679688, 4780.732422, 3525.494141, 3682.632813] }  
      ]
    }]
  }	
}  

```

> candle.component.html

```html
<div>
    <canvasjs-chart [options]="chartOptions" [styles]="{width: '100%', height:'460px'}"></canvasjs-chart>    
</div>   
```

> Gráfico no modo responsivo

![Gráfico de Pizza](https://github.com/carlosItDevelop/P2_v1_ChartTabsInAngularMaterial/blob/main/img/grafico-pizza-780px.png "Gráfico de Pizza")


> # ChartTabsInAngularMaterial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
