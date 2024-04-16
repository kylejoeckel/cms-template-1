import React, { useContext, useState } from "react";
import { LocationCity, Phone, PunchClock } from "@mui/icons-material";
import { Card, useTheme, Box } from "@mui/material";
import { StyledButton } from "../StyledButton";
import { ContactModal } from "../ContactModal";
import { SiteDataContext } from "../../app";
import "./ContactCard.css"; // Assuming you move styles here

const ContactInfoItem = ({ Icon, content }) => (
  <Box display="flex" alignItems="center" p={1}>
    <Box p={1}>
      <Icon />
    </Box>
    <Box p={1} dangerouslySetInnerHTML={{ __html: content }} />
  </Box>
);

export const ContactCard = ({ mobile }) => {
  const theme = useTheme();
  const data = useContext(SiteDataContext);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const ASSET_URL = `${data?.assetUrl}${data?.groupName}`;

  return (
    <Card
      elevation={0}
      className={mobile ? "mobileContentSquare" : "contentSquare"}
      sx={{
        textAlign: "left",
        width: mobile ? "100%" : "calc(40%)",
        backgroundColor: theme?.palette?.background?.default,
        borderRadius: 0,
        padding: mobile ? 0 : 2,
      }}
    >
      <ContactModal open={contactModalOpen} setOpen={setContactModalOpen} />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width="100%"
        pb={2}
      >
        {data?.mainLogo && (
          <img
            className="contactCardLogo"
            src={`${ASSET_URL}${data?.mainLogo}`}
            alt="data Logo"
          />
        )}
        <Card elevation={0} className="contactInfoCard">
          <ContactInfoItem Icon={PunchClock} content={data?.hours} />
          <ContactInfoItem Icon={LocationCity} content={data?.address} />
          <ContactInfoItem Icon={Phone} content={data?.phone} />
          <StyledButton
            fullWidth
            color="primary"
            variant="outlined"
            href={data?.reservationLink}
          >
            Reservations
          </StyledButton>
          <StyledButton
            fullWidth
            color="primary"
            variant="outlined"
            sx={{ mt: 1 }}
            onClick={() => setContactModalOpen(true)}
          >
            Message Us
          </StyledButton>
        </Card>
      </Box>
    </Card>
  );
};
