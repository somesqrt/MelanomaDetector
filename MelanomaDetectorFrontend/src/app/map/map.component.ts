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
import {UploadService} from "../upload.service";
import {Specialist} from "../interfaces/Specialist";

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
  constructor(private uploadService:UploadService) { }


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

  contentString = ""

  specialistResult = new Array<Specialist>()


  ngOnInit(): void {
    this.uploadService.getSpecialists()

    let loader = new Loader({
        apiKey:'AIzaSyCaIf1PPJRg1JoN5vQ5eg31AU1Q89o9UM8'
    })

    loader.load().then(() =>{
      console.log("loaded map")

      this.map = new google.maps.Map(document.getElementById('map')!,{
        center: {lat:49.16356968656602, lng:18.2129823095954},
        zoom: 6
      })

      console.log("map cerated")

      setTimeout(() => {

      console.log(this.uploadService.specialistResult.length)

      for (let i = 0; i < this.uploadService.specialistResult.length; i++) {
        const location = {
          lat: this.uploadService.specialistResult[i].longitude,
          lng: this.uploadService.specialistResult[i].latitude,
        }


        const marker = new google.maps.Marker({
          position: location,
          label: "",
          clickable: true,
          map: this.map
        })


        this.contentString = ""
        if(this.uploadService.specialistResult[i].clinics != null){
          this.contentString = this.contentString + '<div>'+'<h1>'+ this.uploadService.specialistResult[i].clinics +'<h1>' + '<br>'
        }else{
          this.contentString = this.contentString + '<div>'
        }
        if(this.uploadService.specialistResult[i].city != null){
          this.contentString = this.contentString + '<p><font size="3">'+ "City:" + this.uploadService.specialistResult[i].city + '</font></p>'
        }
        if(this.uploadService.specialistResult[i].street != null){
          this.contentString = this.contentString + '<p><font size="3">'+ "Street:" + this.uploadService.specialistResult[i].street + '</font></p>'
        }
        if(this.uploadService.specialistResult[i].floor != null){
          this.contentString = this.contentString + '<p><font size="3">'+ "Floor:" + this.uploadService.specialistResult[i].floor + '</font></p>'
        }
        if(this.uploadService.specialistResult[i].city != null || this.uploadService.specialistResult[i].street != null || this.uploadService.specialistResult[i].floor != null){
          this.contentString = this.contentString + '<br>'
        }
        if(this.uploadService.specialistResult[i].web != null){
          this.contentString = this.contentString + "<font size=\"3\">Web:</font>" + '<a href="' + this.uploadService.specialistResult[i].web + '"><font size="3">'+this.uploadService.specialistResult[i].web+'</font></a>'
        }
        if(this.uploadService.specialistResult[i].online_reservation != null){
          this.contentString = this.contentString + '<font size="3">'+ "Online resirvation:" + '</font>' + '<a href="' +  this.uploadService.specialistResult[i].online_reservation+ '"><font size="3">' + this.uploadService.specialistResult[i].online_reservation + '</font></a>'
        }
        if(this.uploadService.specialistResult[i].web != null || this.uploadService.specialistResult[i].online_reservation != null){
          this.contentString = this.contentString + '<br>'
        }
        if(this.uploadService.specialistResult[i].working_hours != null){
          this.contentString = this.contentString + '<p><font size="3">'+ "Working hours:" + this.uploadService.specialistResult[i].working_hours + '</font></p>' + '<br>'
        }
        if(this.uploadService.specialistResult[i].phone != null){
          this.contentString = this.contentString + '<p><font size="3">'+ "Phone:" + this.uploadService.specialistResult[i].phone + '</font></p>'
        }
        if(this.uploadService.specialistResult[i].mail != null){
          this.contentString = this.contentString + '<p><font size="3">'+ "Mail:" + this.uploadService.specialistResult[i].mail + '</font></p>' +'</div>'
        }else{
          this.contentString = this.contentString + '</div>'
        }


        console.log(this.contentString)

        const infowindow = new google.maps.InfoWindow({
          content: this.contentString,
          ariaLabel: this.uploadService.specialistResult[i].clinics,
        });
        console.log("infowindow created ")

        marker.addListener("click", () => {
          infowindow.open({
            anchor: marker
          });
        });

        console.log("listener added ")

      }
      }, 100)
      /*const location = {
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
            });*/

    })
  }




}
