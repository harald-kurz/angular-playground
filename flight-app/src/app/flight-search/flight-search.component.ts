import { Component } from '@angular/core';
import { Flight } from '../flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-flight-search',
  imports: [],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.scss'
})
export class FlightSearchComponent {
  from = 'Hamburg';
  to = 'Graz';
  flights: Array<Flight> = [];
  selectedFlight: Flight | null = null;

  /**
   *
   */
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }
  

  search(): void {
    const url = 'http://demo.angulararchitects.io/api/flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('from', this.from)
      .set('to', this.to);

    this.http.get<Flight[]>(url,  {headers, params}).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (err) => {
        console.error('Error', err);
      }
    })
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
