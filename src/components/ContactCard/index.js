import React, { useState } from "react";
import { LocationCity, Phone, PunchClock } from "@mui/icons-material";
import { StyledButton } from "../StyledButton";
import { Card, useTheme } from "@mui/material";
import { ContactModal } from "../ContactModal";

export const ContactCard = ({ mobile, data }) => {
  const theme = useTheme();
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const ASSET_URL = `${data?.assetUrl}${data?.groupName}`;

  return (
    <Card
      elevation={0}
      className={mobile ? "mobileContentSquare" : "contentSquare"}
      sx={{
        textAlign: "left",
        width: mobile ? "100%" : "calc(40%)",
        backgroundColor: theme.palette.background.default,
        borderRadius: 0,
        padding: mobile ? "0 !important" : "12px 12px !important",
      }}
    >
      <ContactModal
        open={contactModalOpen}
        setOpen={setContactModalOpen}
        data={data}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          paddingBottom: "18px",
        }}
      >
        <img
          style={{ width: "80%", margin: "0 auto 24px" }}
          src={`${ASSET_URL}${data?.mainLogo}`}
          alt="data Logo"
        />
        <Card
          elevation={0}
          style={{
            padding: "14px 22px",
            border: "solid",
            display: "flex",
            flexDirection: "column",
            width: "90%",
            margin: "0 auto",
            lineHeight: "26px",
            backgroundColor: theme.palette.background.default,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 8,
              }}
            >
              <PunchClock />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 8,
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: data?.hours }} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 8,
              }}
            >
              <LocationCity />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 8,
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: data?.address }} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 8,
              }}
            >
              <Phone />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 8,
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: data?.phone }} />
            </div>
          </div>
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
            sx={"mt-1"}
            onClick={() => setContactModalOpen(true)}
          >
            Message Us
          </StyledButton>
        </Card>
      </div>
    </Card>
  );
};
