import {Component, OnInit, ViewChild} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {transform, fromLonLat} from "ol/proj";
import {Feature} from "ol";
import {Point, Polygon} from "ol/geom";
import {Style,Icon, Text, Fill, Stroke} from "ol/style";
import {Vector} from "ol/layer";
import {MapInfoWindow, MapMarker} from "@angular/google-maps";
import Marker = google.maps.Marker;
import {Loader} from "@googlemaps/js-api-loader";
import {click} from "ol/events/condition";

declare function showMap(): void;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  title="google-maps"
  private map!: google.maps.Map


  markers = []  as  any;
  constructor() { }


  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow
  infoContent = ''

  zoom = 12;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 5,
  };

  markers2 = [
    {
      position:{lat:48.6690, lng:19.6990 },
      label: 'Surat'
    },
    {
      position:{lat:23.0204978, lng:72.4396548 },
      label: 'Ahmedabad'
    },
    {
      position:{lat:22.2736308, lng:70.7512555 },
      label: 'Rajkot'
    }
  ];

  contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";


  ngOnInit(): void {
    let loader = new Loader({
        apiKey:'AIzaSyCaIf1PPJRg1JoN5vQ5eg31AU1Q89o9UM8'
    })

    loader.load().then(() =>{
      console.log("loaded map")

      const location = {
        lat: 48.6690,
        lng: 19.6990,
      }

      this.map = new google.maps.Map(document.getElementById('map')!,{
        center: location,
        zoom: 8
      })

      const marker = new google.maps.Marker({
        position: location,
        label: "First marker",
        clickable: true,
        map: this.map
      })

      const infowindow = new google.maps.InfoWindow({
        content: this.contentString,
        ariaLabel: "First clinic label",
      });


      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker
        });
      });
    })
  }




}
