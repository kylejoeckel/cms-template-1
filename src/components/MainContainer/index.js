import { useEffect, useState } from "react";
import GoogleMaps from "../GoogleMap";
import { Container, useTheme } from "@mui/material";
import ContentBlock from "../ContentBlock";

export const MainContainer = () => {
  const [mobile, setMobile] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    if (window.screen.width <= theme.breakpoints.values.md) setMobile(true);
    if (window.screen.width >= theme.breakpoints.values.md) setMobile(false);
  }, [theme.breakpoints.values.md]);

  return (
    <main
      className="main-content"
      style={{
        border: mobile ? "none" : "solid 2px rgba(0,0,0,0.6)",
        borderBottom: "none",
        padding: mobile ? 0 : "34px 34px 0px",
      }}
    >
      <Container elevation={0}>
        <ContentBlock mobile={mobile} />
        <GoogleMaps />
      </Container>
    </main>
  );
};
