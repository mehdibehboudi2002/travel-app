"use client";
import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/MainSections/Hero';
import Camp from '@/components/MainSections/Camp';
import GetApp from '@/components/MainSections/GetApp';

import { useMap, useMapEvents } from 'react-leaflet';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

type CampType = {
  id: string;
  title: string;
  description: string;
  lat: number;
  lng: number;
  countOfReviews: number;
  qualityOfReviews: string;
};

interface CampPageProps {
  selectedCamp: CampType | undefined;
}

export default function CampPageClient({ selectedCamp }: CampPageProps) {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const routingControlRef = useRef<any>(null);
  const [L, setL] = useState<any>(null);

  useEffect(() => {
    import('leaflet').then((leaflet) => {
      import('leaflet-routing-machine');

      setL(leaflet);

      delete leaflet.Icon.Default.prototype._getIconUrl;
      leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
      });
    });
  }, []);

  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        setUserLocation(e.latlng);
      },
    });

    return userLocation ? (
      <Marker position={userLocation}>
        <Popup>Beginning</Popup>
      </Marker>
    ) : null;
  };

  const RoutingControl = () => {
    const map = useMap();

    useEffect(() => {
      if (!L) return;

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
    }, [userLocation, selectedCamp, map, L]);

    return null;
  };

  return (
    <>
      <section className="pb-8 lg:pb-16 shadow-md">
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

        <div className="w-full h-[340px] lg:h-[80vh] lg:padding-container mt-8 md:mt-14 lg:mt-16">
          {L && selectedCamp && (
            <MapContainer
              className="size-full lg:rounded-5xl z-50"
              center={[selectedCamp.lat, selectedCamp.lng]}
              zoom={13}
              scrollWheelZoom={true}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {selectedCamp && (
                <Marker position={[selectedCamp.lat, selectedCamp.lng]}>
                  <Popup>{selectedCamp.title}</Popup>
                </Marker>
              )}
              <LocationMarker />
              <RoutingControl />
            </MapContainer>
          )}
        </div>
      </section>
      <GetApp />
    </>
  );
}
