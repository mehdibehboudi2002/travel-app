"use client";
import { useState, useRef, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { EVERY_CAMP } from '@/constants';
import Hero from '@/components/MainSections/Hero';
import Camp from '@/components/MainSections/Camp';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import GetApp from '@/components/MainSections/GetApp';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default function CampPage() {
  const { id } = useParams();
  const selectedCamp = EVERY_CAMP.find(camp => camp.id.toLowerCase().replace(/\s+/g, '-') === id);

  const [userLocation, setUserLocation] = useState(null);
  const routingControlRef = useRef(null);


  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setUserLocation(e.latlng);
      },
    });

    return userLocation ? (
      <Marker position={userLocation}>
        <Popup> Beginning </Popup>
      </Marker>
    ) : null;
  };


  const RoutingControl = () => {
    const map = useMap();
    useEffect(() => {

      if (routingControlRef.current) {
        try {
          map.removeControl(routingControlRef.current);
          routingControlRef.current.getPlan().setWaypoints([]);
          routingControlRef.current = null;
        } catch (err) {
          console.error(err);
        }
      }


      if (userLocation && selectedCamp) {
        routingControlRef.current = L.Routing.control({
          waypoints: [
            L.latLng(userLocation.lat, userLocation.lng),
            L.latLng(selectedCamp.lat, selectedCamp.lng),
          ],
          routeWhileDragging: true,
        }).addTo(map);
      }
    }, [userLocation, selectedCamp, map]);

    return null;
  };

  return (<>
    <section className='pb-8 lg:pb-16 shadow-md'>
      <Hero
        isCampDetailsPage={true}
        campName={selectedCamp?.title}
        hasButton={true}
        hasDescription={true}
        description={selectedCamp?.description}
        countOfReviews={selectedCamp?.countOfReviews}
        qualityOfReviews={selectedCamp?.qualityOfReviews}
      />
      <Camp isCampDetailsPage={true} />

      <div className='w-full h-[340px] lg:h-[80vh] lg:padding-container mt-8 md:mt-14 lg:mt-16'>
        <MapContainer className='size-full lg:rounded-5xl z-50' center={[selectedCamp.lat, selectedCamp.lng]} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[selectedCamp.lat, selectedCamp.lng]}>
            <Popup>{selectedCamp.title}</Popup>
          </Marker>
          <LocationMarker />
          <RoutingControl />
        </MapContainer>
      </div>
    </section>
    <GetApp isGetAppDetailsPage={true} />
  </>
  );
}    