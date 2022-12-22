### Repositório Oficial do Projeto Charts in Tabs | Angular Material



> __Quer conhecer nossos projetos na Udemy?:  **[Acesse aqui](https://www.udemy.com/user/carlos-alberto-dos-santos-34/)**.__


#### *Imagens do Projeto*



![Gráfico de Barras](https://github.com/carlosItDevelop/P2_v1_ChartTabsInAngularMaterial/blob/main/img/grafico-barras.png "Gráfico de Barras")


![Gráfico de Pizza](https://github.com/carlosItDevelop/P2_v1_ChartTabsInAngularMaterial/blob/main/img/grafico-pizza.png "Gráfico de Pizza")


![Gráfico de Linhas](https://github.com/carlosItDevelop/P2_v1_ChartTabsInAngularMaterial/blob/main/img/grafico-linha.png "Gráfico de Linhas")


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
          { label: 'React', y: 32 },

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
               </mat-tab-group>
              </div>
        </div>
    </div>
</div>


```


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
