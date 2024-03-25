import React, { useState } from "react";
import { Card, Typography } from "@mui/material";
import { DynamicButtons } from "../DynamicButtons";
import { useLazyLoadImage } from "../../hooks/useLazyLoadImage";
import useFadeInOnScroll from "../../hooks/useFadeInOnScroll";
import { StyledButton } from "../StyledButton";

const MAX_CONTENT_LENGTH = 750;

const ContentBlockItem = ({ content, index, mobile, theme, registerRef }) => {
  const [ref, isVisible] = useFadeInOnScroll();
  const loadedImage = useLazyLoadImage(content.contentImg);
  const placeholderImage = "/plate_of_food_silhouette.jpg";
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpandContent = () => {
    setIsExpanded(!isExpanded);
  };

  const truncateContent = (content, maxLength) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  const contentDisplay =
    content.content.length > MAX_CONTENT_LENGTH && !isExpanded
      ? truncateContent(content.content, MAX_CONTENT_LENGTH)
      : content.content;

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-out",
      }}
    >
      <div
        ref={(el) => registerRef(content.contentImg, el)}
        data-bg={content.contentImg}
        style={{
          order: mobile ? 0 : index % 2 === 0 ? 0 : 2,
          minHeight: "200px",
          height: "auto",
          position: "relative",
          width: mobile ? "100%" : "45%",
          backgroundImage: `${
            loadedImage
              ? `url(${content.contentImg})`
              : `url(${placeholderImage})`
          }`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          color: "transparent",
          padding: mobile ? "20px 30px 350px" : "",
        }}
        dangerouslySetInnerHTML={{ __html: mobile ? contentDisplay : "" }}
      />
      <Card
        elevation={0}
        className={mobile ? "mobileContentSquare" : "contentSquare"}
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
        }}
        sx={{ width: mobile ? "80%" : "55%" }}
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
          dangerouslySetInnerHTML={{ __html: contentDisplay }}
          variant="body1"
        />
        {content.content.length > MAX_CONTENT_LENGTH && (
          <StyledButton
            color={index % 2 === 0 ? "primary" : "info"}
            onClick={toggleExpandContent}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </StyledButton>
        )}
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
          }}
        >
          {content.ctaList ? (
            <DynamicButtons content={content} index={index} />
          ) : (
            <></>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ContentBlockItem;
