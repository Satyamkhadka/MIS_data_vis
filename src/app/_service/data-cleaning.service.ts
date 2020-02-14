import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataCleaningService {

  constructor() { }

  checkForNullAndNegetive(data){

    data = data.map(el=>{
      if(el){
        if(el < 0){
          return 0;
        } else if ( el > 500 ){
          return 500;
        } else { return el}
      } else {
        return 0;
      }
    })
return data;
  }
}
