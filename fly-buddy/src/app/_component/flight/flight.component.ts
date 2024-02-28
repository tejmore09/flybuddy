import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/_model/flight.model';
import { FlightDataService } from 'src/app/_services/flight-data.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  flight: Flight = new Flight();
  flightAvailable:boolean = false;
  sources:any[] | undefined;
  destinations:any[] | undefined;

  constructor(private flightService:FlightDataService){
    
  }
  dbConfig: DBConfig = {
    name: 'myDb',
    version: 1,
    objectStoresMeta: [{
      store: 'routes',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'route', keypath: 'route', options: { unique: false } },
        { name: 'price', keypath: 'price', options: { unique: false } }
      ]
    }]
  };
  ngOnInit(): void {
    this.flightService.getFlightDetails().subscribe({
      next:(data:any)=>{
        console.log(data);          
        
      }
    });
    
  }

  incrementAdults() {
    if (!this.flight.numberOfAdults) {
      this.flight.numberOfAdults = 1;
    } else {
      this.flight.numberOfAdults++;
    }
  }

  decrementAdults() {
    if (this.flight.numberOfAdults && this.flight.numberOfAdults > 0) {
      this.flight.numberOfAdults--;
    }
  }

  incrementChildren() {
    if (!this.flight.numberOfChildren) {
      this.flight.numberOfChildren = 1;
    } else {
      this.flight.numberOfChildren++;
    }
  }

  decrementChildren() {
    if (this.flight.numberOfChildren && this.flight.numberOfChildren > 0) {
      this.flight.numberOfChildren--;
    }
  }

  onSubmit(formData: Flight) {
    // Here you can handle the form data
    console.log(formData);    
    
    this.flightService.getFlightPrice(formData).subscribe({
      next:response=>{
        alert(response.totalPrice);
        formData = null;
        this.flightAvailable = true;
        this.flight.price = response.totalPrice;

      },
      error:err=>{alert(err.error);
      this.flightAvailable = false;
      },
      complete:()=>console.log('complete')
    })

  }

}
