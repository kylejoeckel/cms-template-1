import React, { useRef } from "react";
import { useTheme } from "@mui/material";
import { RestaurantInfo } from "../../content/RestaurantInfo";
import { ContactCard } from "../ContactCard";
import ContentBlockItem from "../ContentBlockItem";
import { useLazyLoadImage } from "../../hooks/UseLazyLoading";

const ContentBlock = ({ mobile }) => {
  const theme = useTheme();
  const contentRefs = useRef({});

  // Initial path to the placeholder image
  const placeholderImage = "/plate_of_food_silhouette.jpg"; // Adjust the path as needed based on your project structure

  const registerRef = (url, el) => {
    if (el && !contentRefs.current[url]) {
      contentRefs.current[url] = el;
    }
  };
  const loadHeroImage = useLazyLoadImage(RestaurantInfo.heroImg);
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
          ref={(el) => registerRef(RestaurantInfo.heroImg, el)}
          data-bg={RestaurantInfo.heroImg}
          style={{
            minHeight: "200px",
            width: mobile ? "100%" : "calc(60%)",
            backgroundImage: `${
              loadHeroImage
                ? `url(${RestaurantInfo.heroImg})`
                : `url(${placeholderImage})`
            }`, // Load hero image based on state
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      {mobile && <hr />}
      {RestaurantInfo.content.map((content, i) => (
        <ContentBlockItem
          content={content}
          index={i}
          mobile={mobile}
          theme={theme}
          registerRef={registerRef}
        />
      ))}
    </>
  );
};

export default ContentBlock;
