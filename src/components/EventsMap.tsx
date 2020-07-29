import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';


// Grab the default LatLng from currentUser 
const defaultLatLng: LatLngTuple = [49.2827, -123.1207];
const zoom: number = 12;

interface IProps {
    events: IEvent[];
    isLoading?: boolean;
}

export const EventsMap: React.FC<IProps> = ({ events }) => {

    return (
        <Map className="EventsMap"
            center={defaultLatLng}
            zoom={zoom}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
            </TileLayer>
            {events.map((event: IEvent) => (
                <Marker position={[event.latitude, event.longitude]} key={event.id}>
                    <Popup>
                        {event.address}
                    </Popup>
                </Marker>
            ))}
        </Map>
    )
}