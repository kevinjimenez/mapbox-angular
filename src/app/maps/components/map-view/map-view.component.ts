import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {MapService, PlacesService} from "../../services";
import {Map, Marker, Popup} from 'mapbox-gl'

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv') mapDivElement!: ElementRef;

  constructor(
    private readonly _placesService: PlacesService,
    private readonly _mapService: MapService
  ) {
  }

  ngAfterViewInit() {

    if(!this._placesService.userLocation) throw new Error('Sin location _placesService.userLocation')

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this._placesService.userLocation, // starting position [lng, lat]
      zoom: 14 // starting zoom
    });

    const popup = new Popup()
      .setHTML(`
        <h6>Aqui estoy</h6>
        <span>Estoy en este lugar del mundo</span>
      `);

    new Marker({color: 'red'})
      .setLngLat(this._placesService.userLocation)
      .setPopup(popup)
      .addTo(map);

    this._mapService.setMap(map);

  }
}
