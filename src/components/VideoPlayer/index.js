import { useLocation } from "react-router-dom";
import { RestaurantInfo } from "../../content/RestaurantInfo";

export const VideoPlayer = () => {
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
        poster={RestaurantInfo.heroVideoPoster}
        autoPlay
        loop
        muted
        playsInline
        defaultMuted
        width={"100vw"}
      >
        <source
          style={{ width: "100%" }}
          src={RestaurantInfo.heroVideo}
          type="video/mp4"
        />
      </video>
    </div>
  );
};
