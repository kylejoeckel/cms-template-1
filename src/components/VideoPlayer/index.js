import { useLocation } from "react-router-dom";
import { SiteDataContext } from "../../app";
import { useContext } from "react";

export const VideoPlayer = () => {
  const data = useContext(SiteDataContext);

  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div
      className="video-container"
      style={{
        borderBottom: isHome ? "solid 34px white" : "none",
        height: !isHome ? "200px" : "600px",
      }}
    >
      <video
        className="videoTag"
        poster={`${data?.assetUrl}${data?.groupName}${data?.heroVideoPoster}`}
        autoPlay
        loop
        muted
        playsInline
        defaultMuted
        width={"100vw"}
      >
        <source
          style={{ width: "100%" }}
          src={`/HeroVideo.mp4`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};
