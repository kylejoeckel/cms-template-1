import { Typography } from "@mui/material";

export const Footer = ({ data }) => {
  return (
    <footer className="footer">
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} {data?.fullName}. All rights reserved.
      </Typography>
    </footer>
  );
};
