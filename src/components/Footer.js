import { Typography } from "@mui/material";
import { Mannings } from "../content/Mannings";

export const Footer = () => {
  return (
    <footer className="footer">
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} {Mannings.fullName}. All rights
        reserved.
      </Typography>
    </footer>
  );
};
