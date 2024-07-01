import "./app.css";
import React, { FC } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Container from "@mui/material/Container";
import { Navbar } from "src/components/layout/navbar";
import { Footer } from "src/components/layout/footer";
import { Theme } from "src/components/theme";
import { config } from "src/config";

import { routes } from "./routes";

axios.defaults.baseURL = `${config.api.url}/rest`;

const App: FC = () => {
  return (
    <Theme>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={`route-${index}`}
              element={<route.component />}
              path={route.path}
              // Note: 'exact' prop is not needed in v6, all routes are exact by default
            />
          ))}
        </Routes>
        <Footer />
      </Container>
    </Theme>
  );
};

export default App;
