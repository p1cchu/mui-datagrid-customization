import React, { useState, useEffect } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Table from "./Table";
import "../Styles/App.css";
import "@fontsource/montserrat/500.css";

const customTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 14,
  },
});

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/series");
      const data = await res.json();
      setData(data);
    } catch (error) {}
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={customTheme}>
          <Table gameData={data} />
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}
