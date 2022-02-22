import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  private debounceTimer?: NodeJS.Timeout

  constructor() {
  }


  onQueryChange(value: string = '') {
    if (this.debounceTimer) clearTimeout(this.debounceTimer)


    this.debounceTimer = setTimeout(
      () => {
        console.log('mandar query', value)
      }, 350)

  }
}
