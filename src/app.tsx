import React, { useState } from "react";
import { Provider } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { DefaultButton } from "./components/buttons/defaultButton";
import { Map } from "./components/map";
import { TopBar } from "./components/topbar";
import { theme } from "./styles/theme";
import { store } from "./state";
import { useAction } from "./utils/useAction";
import { ClosableModal } from "./components/modal/modal";
import { PreviewMap } from "./components/previewMap";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const position = [51.505, -0.09];

export const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container>
          <Header>
            <TopBar />
          </Header>
          <Main>
            {!isStarted ? (
              <DefaultButton onClick={() => setIsStarted(!isStarted)}>
                Start
              </DefaultButton>
            ) : (
              <Map />
            )}
          </Main>
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

const MacC = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template:
    "hd" 10%
    "main" 90%
    / 100%;
`;

const Header = styled.div`
  grid-area: hd;
  position: fixed;
  padding: 10px;
`;

const Main = styled.div`
  grid-area: main;
  display: flex;
  align-items: center;
  justify-content: center;
`;
