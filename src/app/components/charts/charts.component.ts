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
    theme: "dark2",//'light2', // "light1", "dark1", "dark2"
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
    theme: 'light2', // "light1", "dark1", "dark2"
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
