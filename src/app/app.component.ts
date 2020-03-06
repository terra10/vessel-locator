import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { APIService, ModelVesselFilterInput } from './API.service';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'VesselLocator';
  vessels: Array<any>;

  public editMode = false;

  public searchString = '';

  public name: string;
  public ship_type: string;
  public latitude: number;
  public longitude: number;
  public heading: number;
  public speed: number;
  public rot: string;
  public accuracy: number;
  public course: number;
  public navigational_status: string;
  public destination: string;

  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
  };
  infoContent = '';

  constructor(private apiService: APIService) {
  }

  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.infoWindow.open(marker);
  }

  public onSubmit(): void {
    this.createVessel(this.name,
      this.ship_type, this.latitude, this.longitude,
      this.heading, this.speed, this.rot, this.accuracy, this.course, this.navigational_status, this.destination);
  }

  createVessel(name: string, ship_type: string,
               latitude: number, longitude: number,
               heading: number, speed: number, rot: string,
               accuracy: number, course: number, navigational_status: string, destination: string) {
    this.apiService.CreateVessel({
      name,
      ship_type,
      latitude,
      longitude,
      heading,
      speed,
      rot,
      accuracy,
      course,
      navigational_status,
      destination
    });
  }

  searchVessel() {
    const filter: ModelVesselFilterInput  = {
      name : {
        contains: this.searchString
      }
    };
    this.apiService.ListVessels(filter, 1).then((event) => {
      if (!!event.items.length) {
        const foundVessel = event.items.pop();

        this.center = {
          lat: foundVessel.latitude,
          lng: foundVessel.longitude,
        };
      }

    });
  }

  async ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
    this.apiService.OnCreateVesselListener.subscribe((evt) => {
      const data = (evt as any).value.data.onCreateVessel;
      this.vessels = [...this.vessels, data];
    });
    this.apiService.OnUpdateVesselListener.subscribe((evt) => {
      const data = (evt as any).value.data.onUpdateVessel;
      this.vessels = [...this.vessels, data];
    });
  }

  ngAfterViewInit(): void {
    this.map.boundsChanged.pipe(
      debounceTime(1000)
    ).subscribe(() => {
      const bounds: google.maps.LatLngBounds = this.map.getBounds();
      let filter: ModelVesselFilterInput;
      if (bounds){
        filter = {
          latitude: {
            between: [
              bounds.getSouthWest().lat(), bounds.getNorthEast().lat()
            ]
          },
          longitude: {
            between: [
              bounds.getSouthWest().lng(), bounds.getNorthEast().lng()
            ]
          }
        };
      }



      this.apiService.ListVessels(filter ? filter : undefined, 100).then((evt) => {
        this.vessels = evt.items;
      });
    });
  }
}
