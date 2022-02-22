import {Injectable} from '@angular/core';
// import {HttpClient} from "@angular/common/http";
import {Feature, PlacesInterface} from "../interfaces/places.interface";
import {PlacesApiClient} from "../api/placesApiClient";
import {MapService} from "./map.service";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  // userLocation: [number, number] | undefined
  userLocation?: [number, number]
  isLoadingPlaces = false;
  places: Feature[] = []

  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  constructor(
    // private readonly _httpClient: HttpClient,
    private readonly _placesApiClient: PlacesApiClient,
    private readonly _mapService: MapService,
  ) {
    this.getUserLocation();
  }

  async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          this.userLocation = [coords.longitude, coords.latitude]
          resolve(this.userLocation)
        },
        err => {
          reject()
        }
      )

    });
  }


  getPlacesByQuery(query: string = '') {

    if(query.length === 0){
      this.isLoadingPlaces = false;
      this.places = [];
      return;
    }

    if(!this.userLocation) throw Error('No hay userLocation')

    this.isLoadingPlaces = true;

    this._placesApiClient
      .get<PlacesInterface>(`/${query}.json`, {
        params: {
          proximity: this.userLocation.join(',')
        }
      })
      .subscribe(rta => {
        console.log(rta.features)
        this.isLoadingPlaces = false;
        this.places = rta.features;

        this._mapService.createMarkersFromPlaces(this.places)
      });
  }

}
