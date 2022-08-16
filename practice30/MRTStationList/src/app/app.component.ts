import { Component } from '@angular/core';
import { stationList } from './station-list.const'

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MRTStationList';
  list = stationList;

  // getList = function(): any{
  //   var ls : any= [] ;
  //   $.ajax({
  //     type: 'GET',
  //     dataType: 'jsonp',
  //     url: 'https://tcgmetro.blob.core.windows.net/stationnames/stations.json',
  //     async: false,
  //     success: function (data: any): any {
  //       ls = data;
  //     },
  //     error: function (data: any): any {
  //       alert('err: ' + data);
  //     },
  //   });
  //   return ls;
  // }

  // list = this.getList();

  // constructor() {  // Constructor
  //   setTimeout(() => {
  //   this.list = this.getList();
  //   console.log('updated' + new Date().getSeconds())
  // }, 5000);
  // }


}
