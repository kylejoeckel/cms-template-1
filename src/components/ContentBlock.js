import React, { useEffect, useRef, useState } from "react";
import { Card, Typography, useTheme } from "@mui/material";
import { DynamicButtons } from "./DynamicButtons";
import { RestaurantInfo } from "../content/RestaurantInfo";
import { ContactCard } from "./ContactCard";

const ContentBlock = ({ mobile }) => {
  const theme = useTheme();
  const [loadHeroImage, setLoadHeroImage] = useState(false); // State to track if the hero image should be loaded
  const heroImageRef = useRef(null); // Ref for the hero image div
  const [loadedImages, setLoadedImages] = useState({});
  const contentRefs = useRef({});

  // Initial path to the placeholder image
  const placeholderImage = "/plate_of_food_silhouette.jpg"; // Adjust the path as needed based on your project structure

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const bgUrl = entry.target.getAttribute("data-bg");
          if (entry.isIntersecting && !loadedImages[bgUrl]) {
            setLoadedImages((prev) => ({ ...prev, [bgUrl]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01 }
    );

    Object.values(contentRefs.current).forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [loadedImages]);

  const registerRef = (url, el) => {
    if (el && !contentRefs.current[url]) {
      contentRefs.current[url] = el;
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoadHeroImage(true); // When hero image div is in view, set state to load the image
            observer.unobserve(entry.target); // Stop observing the hero image div
          }
        });
      },
      { threshold: 0.01 }
    ); // Threshold is the percentage of the target's visibility the observer's callback should execute

    const { current } = heroImageRef;
    if (current) {
      observer.observe(current); // Observe the hero image div
    }

    return () => observer.disconnect(); // Cleanup observer when component unmounts or re-renders
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const heroStyle = {
    minHeight: "200px",
    width: mobile ? "100%" : "calc(60%)",
    backgroundImage: loadHeroImage
      ? `${RestaurantInfo.heroImg}`
      : `url(${placeholderImage})`, // Load hero image based on state
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <>
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
          ref={heroImageRef} // Attach ref here
          style={heroStyle}
        ></div>
      </div>
      {mobile && <hr />}
      {RestaurantInfo.content.map((content, i) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            ref={(el) => registerRef(content.contentImg, el)}
            data-bg={content.contentImg}
            style={{
              order: mobile ? 0 : i % 2 === 0 ? 0 : 2,
              minHeight: "200px",
              height: "auto",
              position: "relative",
              width: mobile ? "100%" : "45%",
              backgroundImage: `${
                loadedImages[content.contentImg]
                  ? content.contentImg
                  : `url(${placeholderImage})`
              }`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
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
    </>
  );
};

export default ContentBlock;
