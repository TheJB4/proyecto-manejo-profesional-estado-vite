/* eslint-disable react/prop-types */
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker, Popup } from 'react-leaflet';
import { useContext } from 'react';

import './Map.css';
import { AppContext } from '../../context';

const ChartMap = () => {
  let {position} = useContext(AppContext)
  console.log(position)
  return (
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {'Tu direccion esta aqui! :)'}
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default ChartMap;