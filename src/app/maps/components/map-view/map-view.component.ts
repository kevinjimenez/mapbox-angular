import { Component, OnInit } from '@angular/core';
import {PlacesService} from "../../services";

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  constructor(
    private readonly _placesService: PlacesService
  ) { }

  ngOnInit(): void {
    console.log(this._placesService.userLocation);
  }

}
