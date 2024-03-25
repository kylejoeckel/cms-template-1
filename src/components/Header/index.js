import { VideoPlayer } from "../VideoPlayer";
import "../../styles/index.css";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <header className="header" style={{ height: !isHome ? "200px" : "600px" }}>
      <VideoPlayer />
    </header>
  );
};
