import { Typography } from "@mui/material";
import { RestaurantInfo } from "../content/RestaurantInfo";

export const Footer = () => {
  return (
    <footer className="footer">
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} {RestaurantInfo.fullName}. All rights
        reserved.
      </Typography>
    </footer>
  );
};
