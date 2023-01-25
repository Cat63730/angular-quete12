import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable'


@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(public http: HttpClient) { }

  getImageOfTheDay(): Observable<any> {
    return this.http.get<any>("https://api.nasa.gov/planetary/apod?api_key=0HbcT75QExqLrGrRiMVOqkVaPa7k9MAH0RGRmK8I")
  }
}
