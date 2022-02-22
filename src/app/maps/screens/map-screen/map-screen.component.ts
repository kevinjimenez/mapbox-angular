import { Component, OnInit } from '@angular/core';
import {PlacesService} from "../../services";

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.scss']
})
export class MapScreenComponent{

  constructor(
    private readonly _placesService: PlacesService
  ) { }

  get isUserLocationReady(){
    return this._placesService.isUserLocationReady;
  }

}
