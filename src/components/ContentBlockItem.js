import React from "react";
import { Card, Typography } from "@mui/material";
import { DynamicButtons } from "./DynamicButtons"; // Make sure the path matches your project structure
import { useLazyLoadImage } from "../hooks/useLazyLoading"; // Custom hook for lazy loading

const ContentBlockItem = ({ content, index, mobile, theme }) => {
  const loaded = useLazyLoadImage(content.contentImg);
  const placeholderImage = "/plate_of_food_silhouette.jpg"; // Placeholder image path

  const contentStyle = {
    order: mobile ? 0 : index % 2 === 0 ? 0 : 2,
    minHeight: "200px",
    height: "auto",
    position: "relative",
    width: mobile ? "100%" : "45%",
    backgroundImage: loaded ? `${content.contentImg}` : `url(${placeholderImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: mobile ? "-270px" : "center",
    backgroundSize: "cover",
    color: "transparent",
    padding: mobile ? "10% 20% 50% 20%" : "",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: mobile ? "column" : "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div
        style={contentStyle}
        dangerouslySetInnerHTML={{
          __html: mobile ? content.content : "",
        }}
      />
      <Card
        elevation={0}
        style={{
          textAlign: index % 2 === 0 ? "left" : "right",
          right: mobile ? (index % 2 !== 0 ? "auto" : "16px") : "auto",
          left: mobile ? (index % 2 === 0 ? "auto" : "16px") : "auto",
          position: mobile ? "absolute" : "relative",
          borderRadius: 0,
          backgroundColor: mobile
            ? index % 2 === 0
              ? "rgba(255,255,255,0.8)"
              : "rgba(0,0,0,0.8)"
            : index % 2 === 0
            ? theme.palette.background.default
            : theme.palette.background.dark,
          color:
            index % 2 === 0
              ? theme.palette.text.primary
              : theme.palette.text.secondary,
          width: mobile ? "80%" : "55%", // Adjust as needed
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
          }}
        >
          <Typography
            style={{ order: index % 2 === 0 ? 2 : 0 }}
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
            justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
          }}
        >
          {content.cta ? (
            <DynamicButtons content={content} index={index} />
          ) : (
            <div style={{ height: "50px" }} />
          )}
        </div>
      </Card>
    </div>
  );
};

export default ContentBlockItem;
