import { RestaurantInfo } from "../../content/RestaurantInfo";
import { FixedAppBar } from "../FixedAppBar";

export const Header = () => {
  return (
    <header className="header">
      <FixedAppBar />
      <div
        className="video-container"
        style={{ borderBottom: "solid 34px white" }}
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
            style={{ width: "100vw" }}
            src={RestaurantInfo.heroVideo}
            type="video/mp4"
          />
        </video>
      </div>
    </header>
  );
};
