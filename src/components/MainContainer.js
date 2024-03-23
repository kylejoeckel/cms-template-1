import { useEffect, useState } from "react";
import GoogleMaps from "../GMaps";
import { Mannings } from "../content/Mannings";
import { Card, Container, Typography, useTheme } from "@mui/material";
import { ContactCard } from "./ContactCard";
import { DynamicButtons } from "./DynamicButtons";

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
        <div
          style={{
            display: "flex",
            flexDirection: mobile ? "column" : "row",
            width: "100%",
          }}
        >
          <div style={{ width: mobile ? "100%" : "calc(40%)" }}>
            <ContactCard mobile />
          </div>
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
                backgroundRepeat: "no-repeat",
                backgroundPosition: mobile ? "-270px" : "center",
                backgroundSize: "cover",
                color: "transparent",
                padding: mobile ? "10% 20% 50% 20%" : "",
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
                {content.cta ? (
                  <DynamicButtons content={content} index={i} />
                ) : (
                  <div style={{ height: "50px" }} />
                )}
              </div>
            </Card>
          </div>
        ))}
        <GoogleMaps />
      </Container>
    </main>
  );
};
