import React from 'react';
import { Map, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import { Icon, zoomControl } from "leaflet";

function MapElement ({IPdata}) {

  const myIcon = new Icon({
    iconUrl: process.env.PUBLIC_URL+'/images/icon-location.svg',
    iconSize: [46, 55],
    iconAnchor:[IPdata.location.lat, IPdata.location.lng]
  })

    return (
        <Map center={[IPdata.location.lat, IPdata.location.lng]} zoom={12} zoomControl={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <ZoomControl position="bottomleft" />
          <Marker position={[IPdata.location.lat, IPdata.location.lng]} icon={myIcon} />
        </Map>
      );
}

export default MapElement;

//<Map center={[45.4, -75.7]} zoom={12}>
//    Control.Zoom.position="bottomleft";