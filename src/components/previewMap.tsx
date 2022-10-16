import { LatLngExpression } from "leaflet";
import React, { useEffect } from "react";
import {
  MapContainer,
  ZoomControl,
  Polygon,
  TileLayer,
  useMap,
} from "react-leaflet";
import styled from "styled-components";
import { FieldMap } from "../domain/fieldMap/fieldmap";

interface PreviewMapProps {
  center: LatLngExpression;
  fieldMap?: FieldMap;
}

// this component is used to fixed leaflet bug when we load the map dynamically
//https://stackoverflow.com/questions/36037178/leaflet-loads-incomplete-map
const MapReset: React.FC<{ center: LatLngExpression }> = ({ center }): null => {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
    map.setView(center);
  });

  return null;
};

export const PreviewMap: React.FC<PreviewMapProps> = ({ center, fieldMap }) => {
  return (
    <Container>
      <MapContainer
        style={{ width: "400px", height: "400px" }}
        center={center}
        zoom={16}
        scrollWheelZoom={false}
        minZoom={16}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
        />
        <ZoomControl position="topright" />
        {fieldMap &&
          fieldMap.mapdata.features.map((feature) => (
            <Polygon
              key={feature.properties.id}
              positions={feature.geometry.coordinates}
              pathOptions={{ color: feature.properties.color }}
            />
          ))}

        <MapReset center={center} />
      </MapContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
