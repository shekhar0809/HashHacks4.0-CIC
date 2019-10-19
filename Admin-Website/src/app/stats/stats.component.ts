import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'src/canvasjs.min';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // daily garbage dump

    const dataPoints = [];
    let y = 0;
    for (let i = 0; i < 10000; i++) {
      y += Math.round(5 + Math.abs(Math.random() ) * ( -5 - 5));
      dataPoints.push({ y : Math.abs(y) });
    }
    const chart1 = new CanvasJS.Chart('chartContainer1', {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Garbage Collection stats demo - 10000 DataPoints'
      },
      subtitles: [{
        text: 'Try Zooming and Panning'
      }],
      data: [
        {
          type: 'line',
          dataPoints
        }]
    });

    chart1.render();

    // locality wise garbage production - vs - people working

    const chartContainer3 = new CanvasJS.Chart('chartContainer3', {
      animationEnabled: true,
      zoomEnabled: true,
      title: {
        text: 'Waste produced vs People employed - based on weekly analysis'
      },
      axisX: {
        title: 'Timeline',
        prefix: 'week'
      },
      axisY: {
        title: 'People employed',
        valueFormatString: '#',
        minimum: 0,
        maximum: 100
      },
      data: [{
        type: 'scatter',
        toolTipContent: '<b>Week: </b>{x}<br/><b>Workers: </b>{y}',
        dataPoints: [
          { x: 1, y: 10 },
          { x: 2, y: 20 },
          { x: 3, y: 25 },
          { x: 4, y: 27 },
          { x: 5, y: 25 },
          { x: 6, y: 30 },
          { x: 7, y: 32 },
          { x: 8, y: 32 },
          { x: 9, y: 35 },
          { x: 10, y: 37 },
          { x: 11, y: 40 },
          { x: 12, y: 44 },
          { x: 13, y: 40 },
          { x: 14, y: 45 },
          { x: 15, y: 50 },
          { x: 16, y: 0 },
          { x: 17, y: 0 },
          { x: 18, y: 0 },
          { x: 19, y: 0 },
          { x: 20, y: 0 },
          { x: 21, y: 0 },
          { x: 22, y: 0 },
        ]
      }]
    });
    chartContainer3.render();


    // garbage categories

    const chart4 = new CanvasJS.Chart('chartContainer4', {
      theme: 'light2', // "light1", "light2", "dark1", "dark2"
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: 'Waste Segregation'
      },
      data: [{
        type: 'pie',
        startAngle: 25,
        toolTipContent: '<b>{label}</b>: {y}%',
        showInLegend: 'true',
        legendText: '{label}',
        indexLabelFontSize: 16,
        indexLabel: '{label} - {y}%',
        dataPoints: [
          { y: 51.08, label: 'Bio-degradable' },
          { y: 27.34, label: 'Plastic' },
          { y: 10.62, label: 'Metal' },
          { y: 15.02, label: 'Paper' },
          { y: 4.07, label: 'e-waste' },
          { y: 0.44, label: 'Others' }
        ]
      }]
    });
    chart4.render();

  }

}
