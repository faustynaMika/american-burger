import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 0,
    lng: 0
  };
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  constructor() {
  }

  ngOnInit() {
    this.center = {
      lat: 51.40669381390152,
      lng: 21.151283836948384,
    };
  }
}
