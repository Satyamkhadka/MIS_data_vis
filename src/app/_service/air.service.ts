import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AirService {

  constructor(private httpClient: HttpClient) { }

  getAllStation(){
    return this.httpClient.get(environment.apiURL+environment.allAirStations);
  }
  getLatest(filter){
    const args = this.generateUrl(filter);
    console.log(environment.apiURL+environment.latestAll+args);
    return this.httpClient.get(environment.apiURL+environment.latestAll+args);
    
  }
  getArchiveData(){

  }
  getTwentyFourHourData(){

  }

  private generateUrl(jsonData:JSON):string {
    let url = '?';
    if(jsonData['id']){url+='id='+jsonData['id']} 
    if(jsonData['params']){url+='params='+jsonData['params']} 
    if(jsonData['coordinate']){url+='coordinate='+jsonData['coordinate']} 
    
    return url;
  }

  getReport(data){
    if(data[3]<=0){
      return { color:'secondary',text:'Insufficient data!'}
    }else if(data[3]>0 && data[3]<=30){
      return environment.colorScheme.good;
    } else if(data[3]>30 && data[3]<=60){
      return environment.colorScheme.moderate;

    } else if(data[3]>60 && data[3]<=90){
      return environment.colorScheme.poor;

    } else if(data[3]>90 && data[3]<120){
      return environment.colorScheme.satisfactory;

    } else if(data[3]>120 && data[3]<250){
      return environment.colorScheme.severe;

    } else if(data[3]>250){
      return environment.colorScheme.veryPoor;

    }

  }
}
