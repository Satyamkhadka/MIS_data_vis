import { DataCleaningService } from './../_service/data-cleaning.service';
import { AirService } from './../_service/air.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as Chart from 'chart.js'
import * as L from 'leaflet';
@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.css']
})
export class AirComponent implements OnInit {
  title = 'angular8chartjs';
  canvas: any;
  ctx: any;
  myChart;

  allStation;
  latestData;
  latestDataMeta;
  latestDataLabels = ['TSP','PM1','PM10','PM25'];
  latestDataChart =[];
  onLoadData;
  reportData;
  filterForm:FormGroup;


  private map;
  private marker=[];
  private markerMapObject = [];
  constructor(
    private airService: AirService,
    private formBuilder:FormBuilder,
    private dataCleanService: DataCleaningService
    ) {
      this.getAllStation();
      this.filterForm = this.formBuilder.group({
        station:'none'
    });
  }

  ngOnInit() {
    this.getLatest({id:1});
    
  }
  
  ngAfterViewInit() {
    this.allStationChart();
    this.initMap();
    this.pinOnMap();
  }

  private initMap(): void {
    this.map = L.map('mapid').setView([28.3949, 84.1240], 7);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 10,
      minZoom:6,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a> presented on this site by: <a href="http://satyamkhadka.com.np"><b>Satyam Khadka </b> </a>for MIS Project',
      id: 'mapbox/streets-v11'
    }).addTo(this.map);

   // var marker = L.marker([28.3949, 84.1240]).addTo(this.map);
    
  }

  getAllStation() {
    this.airService.getAllStation().subscribe(data => {
      console.log(data)
      if (data[0]['meta']['found'] > 0) {
        this.allStation = data[1]['result'];
      }
    })
  }

  getLatest(filter){
    this.airService.getLatest(filter).subscribe(data=>{
      if (data['meta']['found'] > 0) {
        this.latestDataMeta = data['meta'];
        this.latestData = data['result'];
        this.latestDataChart = [];
        this.latestDataChart.push(this.latestData[0]['params']['tsp'][0]['value']);
        this.latestDataChart.push(this.latestData[0]['params']['pm1'][0]['value']);
        this.latestDataChart.push(this.latestData[0]['params']['pm10'][0]['value']);
        this.latestDataChart.push(this.latestData[0]['params']['pm25'][0]['value']);
      }
      console.log(this.latestDataChart)
      this.reportData = this.airService.getReport(this.latestDataChart);
      this.latestDataChart = this.dataCleanService.checkForNullAndNegetive(this.latestDataChart);
      
      this.myChart.data.datasets[0].data = this.latestDataChart;
      this.myChart.update();
    });
  }
  onStationChange(id){
this.getLatest({id});


}

  allStationChart(){
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    this.myChart = new Chart(this.ctx, {
      type: 'bar',
        data: {
            labels: this.latestDataLabels,

            datasets: [{
                label: 'pollution Level',
                data: [],
                backgroundColor:'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(0,0,255, 0.6)',
                borderWidth: 1
            }]
        },
        options: {
          title:{
            display:false,
            text:'Pollution Levels'
          },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend:{
              position:'right',
            }
        }
    });
  }


  pinOnMap(){
    // this.marker = this.allStation.map(e=>{ 
    //   if(e.longitude != null && e.latitude != null){
    //       return [e.longitude,e.latitude]
    //   } 
    //     });
    // console.log(this.marker)
    // this.markerMapObject = [];
    // for(let i = 0; i<this.marker.length;i++){
    //   if(this.marker[i]!== undefined){
    //   this.markerMapObject.push(L.marker(this.marker[i]).addTo(this.map));
    //   // if(this.markerMapObject[i]!==undefined)
    //   // this.markerMapObject[i].bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    //    }
    // }
let i = 0;
let marker;
    this.allStation.forEach(e => {
      if(e.longitude!= null && e.latitude != null){
      marker = [e.longitude,e.latitude]
      console.log(marker)
      this.markerMapObject[i] = L.marker(marker).addTo(this.map);
      }
    });
  }
  
}
