import React, { useState } from "react";
import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import { StyledButton } from "../StyledButton";
import { PhoneInTalk, Restaurant } from "@mui/icons-material";
import { useMobileView } from "../../hooks/useMobileView";

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      transition: "background-color 0.3s ease, box-shadow 0.3s ease", // Adding animation
      background: trigger ? "rgba(0,0,0,0.6)" : "transparent",
      boxShadow: trigger
        ? "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
        : "none",
    },
  });
}

export const FixedAppBar = ({ data }) => {
  const ASSET_URL = `${data?.assetUrl}${data?.groupName}`;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const mobile = useMobileView("md"); // Using the custom hook

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ElevationScroll>
        <AppBar elevation={0} position="fixed">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              padding: "4px",
            }}
          >
            <div>
              <StyledButton
                color="secondary"
                id="basic-button"
                variant="text"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Restaurant style={{ marginRight: mobile ? "0" : "4px" }} />
                {mobile ? "" : "Order Now!"}
              </StyledButton>
              <Menu
                id="basic-menu"
                sx={{ marginTop: "54px", marginLeft: "12px" }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ "aria-labelledby": "basic-button" }}
              >
                <MenuItem
                  onClick={() => window.open(data?.takeoutLink, "_self")}
                >
                  Order Food
                </MenuItem>
                <MenuItem>
                  <a
                    style={{ textDecoration: "none" }}
                    href="./mannings-food.pdf"
                    download="dataFood"
                  >
                    View Menu
                  </a>
                </MenuItem>
              </Menu>
            </div>

            <img
              style={{
                maxHeight: mobile ? "80px" : "100px",
                cursor: "pointer",
              }}
              src={`${ASSET_URL}${data?.navLogo}`}
              onClick={() => window.open("/", "_self")}
              alt="Manning's Steaks and Spirits Logo"
            />
            <div style={{ display: "flex" }}>
              <StyledButton
                color="secondary"
                variant="text"
                href={`tel:${data?.phone}`}
              >
                <PhoneInTalk style={{ marginRight: mobile ? "0" : "4px" }} />
                {!mobile && `Contact us`}
              </StyledButton>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
};
