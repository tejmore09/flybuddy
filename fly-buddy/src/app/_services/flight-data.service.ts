import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../_model/flight.model';
import { Booking } from '../_model/booking';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {

  private url = "http://localhost:3000";
  constructor(private http:HttpClient) { }

  getFlightDetails(){
    return this.http.get(`${this.url}/flights`);
  }
  getFlightPrice(formData:Flight):Observable<{totalPrice:number}>{    
    return this.http.post<{totalPrice:number}>( `${this.url}/flights`,formData )
  }

  createBooking(booking:Booking){
    return this.http.post( `${this.url}/createBooking`,booking);

  }
}
