import React from 'react';
import Map, {Marker} from "react-map-gl"
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGl from 'react-map-gl';

const Mapa = ({viewPort, Token}) => {
  
  return (
    <div >
      <Map
      style={{width: "100vw", height: "100vh"}}
      mapboxAccessToken='pk.eyJ1Ijoicm9uYXNwdCIsImEiOiJjbGdoem51OXYwcXYxM3V0MW16Z2dvYnNhIn0.SdB4TFKJTx0GPL1qDha22A'
      initialViewState={
        {latitude: viewPort.latitude,
        longitude: viewPort.longitude,
        zoom: viewPort.zoom  
      }
      }
      mapStyle="mapbox://styles/ronaspt/clgkxuvnd00a701mj2rpr2xos">
      <Marker
        longitude ={viewPort.longitude}
        latitude = {viewPort.latitude}
        />
      
      </Map>
      
      
      
    </div>
  )
}

export default Mapa;
