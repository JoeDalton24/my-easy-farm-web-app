import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  FeatureGroup,
  Popup,
  ZoomControl,
} from "react-leaflet";
import styled from "styled-components";
import { useAction } from "../utils/useAction";
import { useTypedSelector } from "../utils/useTypedSelector";

import { MapIcon } from "./icons";
import { ClosableModal } from "./modal/modal";
import { PreviewMap } from "./previewMap";
import { FieldMap } from "~/domain/fieldMap/fieldmap";
import { LatLngExpression } from "leaflet";

//@ts-ignore
import soilmapsData from "../../soilmaps.json";

export const Map: React.FC = () => {
  const { fetchField } = useAction();
  useEffect(() => {
    fetchField();
  }, []);

  const { fields } = useTypedSelector((state) => state.fields);
  const [fieldMap, setFieldMap] = useState<FieldMap | undefined>(undefined);
  const [previewMap, setPreviewMap] = useState(false);
  const [center, setCenter] = useState<LatLngExpression>([
    4.98047399519336, 49.6690444111223,
  ]);

  return (
    <Container>
      <MapContainer
        style={{ width: "100vw", height: "90vh" }}
        center={[4.98047399519336, 49.6690444111223]}
        zoom={14}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
        />

        <ZoomControl position="topright" />

        {fields &&
          fields.map(({ boundaries, color_hex, id, center }) => (
            <FeatureGroup
              key={id}
              pathOptions={{ color: `#${color_hex}` }}
              eventHandlers={{
                click: (e) => {
                  setFieldMap(
                    soilmapsData.items.find(
                      (item: FieldMap) => item.partfield_id === id
                    )
                  );
                  setCenter(center);
                },
              }}
            >
              <Popup>
                {fieldMap ? (
                  <Row
                    onClick={() => {
                      setPreviewMap(true);
                    }}
                  >
                    {fieldMap.name} <MapIcon />
                  </Row>
                ) : (
                  "no map"
                )}
              </Popup>

              <Polygon positions={boundaries.coordinates}></Polygon>
            </FeatureGroup>
          ))}
      </MapContainer>

      {fieldMap && (
        <ClosableModal
          show={previewMap}
          close={(value) => setPreviewMap(!value)}
        >
          <PreviewMap center={center} fieldMap={fieldMap} />
        </ClosableModal>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.green};
    > svg {
      > g {
        fill: ${({ theme }) => theme.colors.green};
      }
    }
  }
`;
