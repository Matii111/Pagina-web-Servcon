import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from "leaflet"

const position = [-33.434828, -70.6160545, 19]
const markerIcon = L.icon({
    iconUrl: 'https://github.com/Matii111/Pagina-web-Servcon/blob/master/servconico2.png?raw=true',
    iconSize: [30, 30]
});
export default function Map() {
    return (
        <MapContainer center={position} zoom={50} className="mapFormat">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={markerIcon}>
            </Marker>
        </MapContainer>

    )
}
