import { Component } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-quete12';
  public imgOfTheDay: string ="";

  constructor(public nasaService: NasaService){}

  ngOnInit(): void{
    this.nasaService.getImageOfTheDay().subscribe(pictureOfTheDay => {
      this.imgOfTheDay = pictureOfTheDay.url;
      });
  }

}
