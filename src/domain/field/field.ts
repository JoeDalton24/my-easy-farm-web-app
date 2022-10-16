import { LatLngExpression } from "leaflet";

interface Boundaries {
  type: string;
  coordinates: LatLngExpression[];
}

export interface Field {
  id: string;
  color_hex: string;
  boundaries: Boundaries;
  center: LatLngExpression;
}
