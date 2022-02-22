import {Component, OnInit} from '@angular/core';
import {MapService, PlacesService} from "../../services";

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.scss']
})
export class BtnMyLocationComponent {

  constructor(
    private readonly _placesService: PlacesService,
    private readonly _mapService: MapService
  ) {
  }

  goToMyLocation() {
    if(!this._placesService.isUserLocationReady) throw Error('Sin ubicacion')
    if(!this._mapService.isMapReady) throw Error('Sin mapa')
    console.log('ir a mi ubicacion')
    this._mapService.flyTo(this._placesService.userLocation!)
  }
}
