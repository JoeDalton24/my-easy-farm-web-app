import { LatLngExpression } from "leaflet";

interface Geometry {
  coordinates: LatLngExpression[];
  type: string;
}

interface Properties {
  analysis: string;
  color: string;
  id: string;
}

interface Feature {
  geometry: Geometry;
  properties: Properties;
  type: "Feature";
}

interface MapData {
  type: "FeatureCollection";
  features: Feature[];
}

export interface FieldMap {
  name: string;
  partfield_id: string;
  mapdata: MapData;
}
