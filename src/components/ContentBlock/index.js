import React, { useRef } from "react";
import { useTheme } from "@mui/material";
import { ContactCard } from "../ContactCard";
import ContentBlockItem from "../ContentBlockItem";

const ContentBlock = ({ data, mobile }) => {
  const ASSET_URL = `${data?.assetUrl}${data?.groupName}`;
  const theme = useTheme();
  const contentRefs = useRef({});

  const registerRef = (url, el) => {
    if (el && !contentRefs.current[url]) {
      contentRefs.current[url] = el;
    }
  };

  const imageUrl = `${ASSET_URL}${data?.heroImg}`;

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
          <ContactCard mobile data={data} />
        </div>
        <div
          ref={(el) => registerRef(imageUrl, el)}
          data-bg={imageUrl}
          style={{
            minHeight: "200px",
            width: mobile ? "100%" : "calc(60%)",
            backgroundImage: `url(${imageUrl})`, // Eager loading the hero image
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      {mobile && <hr />}
      {data?.content?.map((content, i) => (
        <ContentBlockItem
          content={content}
          data={data}
          key={i}
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
