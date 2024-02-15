import { useTheme } from "@emotion/react";
import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import React from "react";
import { StyledButton } from "./StyledButton";
import { Mannings } from "../content/Mannings";
import { PhoneInTalk, Restaurant } from "@mui/icons-material";

export const FixedAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [mobile, setMobile] = React.useState(false);
  const theme = useTheme();
  React.useEffect(() => {
    if (window.screen.width <= theme.breakpoints.values.md) setMobile(true);
    if (window.screen.width >= theme.breakpoints.values.md) setMobile(false);
  }, [theme.breakpoints.values.md]);
  function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
      sx: { background: trigger ? "rgba(0,0,0,0.6)" : "transparent" },
    });
  }
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
              sx={{marginTop: '54px', marginLeft: '12px'}}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => window.open(Mannings.takeoutLink, '_self')}>
                Order Food
              </MenuItem>
              <MenuItem>
               <a style={{textDecoration: 'none'}} href="./mannings-food.pdf" download="ManningsFood">View Menu</a>

              </MenuItem>
            </Menu>
            <img
              style={{ maxHeight: mobile ? "80px" : "100px" }}
              src={Mannings.navLogo}
              alt="Manning's Steaks and Spirits Logo"
            ></img>
            <div style={{ display: "flex" }}>
              <StyledButton
                color="secondary"
                variant="text"
                href={`tel:${Mannings.phone}`}
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
