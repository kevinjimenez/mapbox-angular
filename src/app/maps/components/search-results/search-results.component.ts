import {Component, OnInit} from '@angular/core';
import {MapService, PlacesService} from "../../services";
import {Feature} from "../../interfaces/places.interface";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  selectedId = '';

  constructor(
    private readonly _placesService: PlacesService,
    private readonly _mapService: MapService,
  ) {
  }

  get isLoadingPlaces(): Boolean {
    return this._placesService.isLoadingPlaces;
  }

  get places(): Feature[] {
    return this._placesService.places;
  }

  flyTo(place: Feature) {

    this.selectedId = place.id;

    const [lng, lat] = place.center
    this._mapService.flyTo([lng, lat])
  }

}
