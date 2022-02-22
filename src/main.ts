import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1Ijoia2V2MjQiLCJhIjoiY2t6eGloeGt0MDFyODJucXRlN3p3YzFwaCJ9.LgMbIhIE2fDWFczeuNKfdw';

// PUNTO DE ENTRADA, VERIFICAR SI PUEDE TENER GEOLOCATION
if(!navigator.geolocation){
  alert('Navegador no soporta la geolocation')
  throw new Error('Navegador no soporta la geolocation')
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
