import * as React from "react";
import {
  CssBaseline,
  Container,
  Typography,
  Card,
  useTheme,
  ButtonGroup,
} from "@mui/material";
import "./App.css";
import { LocationCity, Phone, PunchClock } from "@mui/icons-material";
import GoogleMaps from "./GMaps";
import { Mannings } from "./Mannings";
import { StyledButton } from "./components/StyledButton";
import { FixedAppBar } from "./components/FixedAppBar";

function App() {
  const [mobile, setMobile] = React.useState(false);
  const theme = useTheme();
  React.useEffect(() => {
    if (window.screen.width <= theme.breakpoints.values.md) setMobile(true);
    if (window.screen.width >= theme.breakpoints.values.md) setMobile(false);
  }, [window.screen.width]);
  return (
    <div className="app">
      <CssBaseline />
      <header className="header">
        <FixedAppBar />
        <div
          className="video-container"
          style={{ borderBottom: "solid 34px white" }}
        >
          <video
            className="videoTag"
            poster={Mannings.heroVideoPoster}
            autoPlay
            loop
            muted
            playsInline
            defaultMuted
            width={"100vw"}
          >
            <source
              style={{ width: "100vw" }}
              src={Mannings.heroVideo}
              type="video/mp4"
            />
          </video>
        </div>
      </header>
      <main
        className="main-content"
        style={{
          border: mobile ? "none" : "solid 2px rgba(0,0,0,0.6)",
          borderBottom: "none",
          padding: mobile ? 0 : "34px 34px 0px",
        }}
      >
        <Container elevation={0}>
          <div
            style={{
              display: "flex",
              flexDirection: mobile ? "column" : "row",
              width: "100%",
            }}
          >
            <Card
              elevation={0}
              className={mobile ? "mobileContentSquare" : "contentSquare"}
              sx={{
                textAlign: "left",
                width: mobile ? "100%" : "calc(40%)",
                backgroundColor: theme.palette.background.default,
                borderRadius: 0,
                padding: mobile ? "0 !important" : "12px 12px !important",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                  paddingBottom: "18px",
                }}
              >
                <img
                  style={{ width: "80%", margin: "0 auto 24px" }}
                  src={Mannings.mainLogo}
                />
                <Card
                  elevation={0}
                  style={{
                    padding: "14px 22px",
                    border: "solid",
                    display: "flex",
                    flexDirection: "column",
                    width: "90%",
                    margin: "0 auto",
                    lineHeight: "26px",
                    backgroundColor: theme.palette.background.default,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 8,
                      }}
                    >
                      <PunchClock />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 8,
                      }}
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: Mannings.hours }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 8,
                      }}
                    >
                      <LocationCity />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 8,
                      }}
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: Mannings.address }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 8,
                      }}
                    >
                      <Phone />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 8,
                      }}
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: Mannings.phone }}
                      />
                    </div>
                  </div>
                  <StyledButton
                    fullWidth
                    color="primary"
                    variant="outlined"
                    href={Mannings.reservationLink}
                  >
                    Reservations
                  </StyledButton>
                </Card>
              </div>
            </Card>
            <div
              style={{
                minHeight: "200px",
                width: mobile ? "100%" : "calc(60%)",
                backgroundImage: `${Mannings.heroImg}`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
          </div>
          {mobile && <hr />}
          {Mannings.content.map((content, i) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div
                style={{
                  order: mobile ? 0 : i % 2 === 0 ? 0 : 2,
                  minHeight: "200px",
                  height: "auto",
                  position: "relative",
                  width: mobile ? "100%" : "45%",
                  backgroundImage: content.contentImg,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: mobile ? "-270px" : "center",
                  backgroundSize: "cover",
                  color: "transparent",
                  padding: mobile ? "10% 20% 50%" : "",
                }}
                dangerouslySetInnerHTML={{
                  __html: mobile ? content.content : "",
                }}
              />
              <Card
                elevation={0}
                className={mobile ? "mobileContentSquare" : "contentSquare"}
                style={{
                  textAlign: i % 2 === 0 ? "left" : "right",
                  right: mobile ? (i % 2 !== 0 ? "auto" : "16px") : "auto",
                  left: mobile ? (i % 2 === 0 ? "auto" : "16px") : "auto",
                  position: mobile ? "absolute" : "relative",
                  borderRadius: 0,
                  backgroundColor: mobile
                    ? i % 2 === 0
                      ? "rgba(255,255,255,0.8)"
                      : "rgba(0,0,0,0.8)"
                    : i % 2 === 0
                    ? theme.palette.background.default
                    : theme.palette.background.dark,
                  color:
                    i % 2 === 0
                      ? theme.palette.text.primary
                      : theme.palette.text.secondary,
                }}
                sx={{ width: mobile ? "80%" : "55%" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                  }}
                >
                  <Typography
                    style={{ order: i % 2 === 0 ? 2 : 0 }}
                    dangerouslySetInnerHTML={{ __html: content.title }}
                    variant="h5"
                  />
                  {content.titleIcon && <>&nbsp;{content.titleIcon}&nbsp;</>}
                </div>
                <hr />
                <Typography
                  dangerouslySetInnerHTML={{ __html: content.content }}
                  variant="body1"
                />
                <div
                  style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                  }}
                >
                  <ButtonGroup>
                    {content.cta && (
                      <StyledButton
                        color={i % 2 === 0 ? "primary" : "info"}
                        href={content.ctaLink}
                        download={content.ctaDownload}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content.cta}
                      </StyledButton>
                    )}
                    {content.cta2 && (
                      <StyledButton
                        color={i % 2 === 0 ? "primary" : "info"}
                        href={content.cta2Link}
                        download={content.cta2Download}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content.cta2}
                      </StyledButton>
                    )}
                    {content.cta3 && (
                      <StyledButton
                        color={i % 2 === 0 ? "primary" : "info"}
                        href={content.cta3Link}
                        download={content.cta3Download}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content.cta3}
                      </StyledButton>
                    )}
                  </ButtonGroup>
                </div>
              </Card>
            </div>
          ))}
          <GoogleMaps />
        </Container>
      </main>
      <footer className="footer">
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} {Mannings.fullName}. All rights
          reserved.
        </Typography>
      </footer>
    </div>
  );
}

export default App;
