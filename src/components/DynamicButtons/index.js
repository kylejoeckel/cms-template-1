import { ButtonGroup } from "@mui/material";
import { StyledButton } from "../StyledButton";

// Function to detect if the user is on Safari and a mobile device
const isSafariOnMobile = () => {
  const userAgent = navigator.userAgent;
  const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
  return isSafari && isMobile;
};

export const DynamicButtons = ({ content, index }) => {
  // Check if the user is on Safari and on a mobile device
  const safariMobile = isSafariOnMobile();
  return (
    <ButtonGroup>
      {content.ctaList.map((cta) => (
        <StyledButton
          color={index % 2 === 0 ? "primary" : "info"}
          href={`${cta?.ctaLink}${safariMobile ? ".pdf" : ""}`}
          download={safariMobile ? true : cta?.ctaDownload}
          target={safariMobile ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          {cta?.cta}
        </StyledButton>
      ))}
    </ButtonGroup>
  );
};
