import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nanoblue';

  updateDatabase(value){
    console.log(value); 
  } 
 
  ngOnInit(){
    let bluetoothNavigator: any = window.navigator;
    if(bluetoothNavigator && bluetoothNavigator.bluetooth){
      bluetoothNavigator.bluetooth.requestDevice({acceptAllDevices:true}).then((device) => {
        console.log(device);
      });

    }
     
  }
}
