import {Component, OnInit} from '@angular/core';
import {PlacesService} from "../../services";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  private debounceTimer?: NodeJS.Timeout

  constructor(
    private readonly _placesService:PlacesService
  ) {
  }


  onQueryChange(value: string = '') {
    if (this.debounceTimer) clearTimeout(this.debounceTimer)


    this.debounceTimer = setTimeout(
      () => {
        console.log('mandar query', value)
        this._placesService
          .getPlacesByQuery(value);
      }, 350)

  }
}
