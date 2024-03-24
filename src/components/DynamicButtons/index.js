import { ButtonGroup } from "@mui/material";
import { StyledButton } from "../StyledButton";

export const DynamicButtons = ({ content, index }) => {
  return (
    <ButtonGroup>
      {content.cta && (
        <StyledButton
          color={index % 2 === 0 ? "primary" : "info"}
          href={content.ctaLink}
          download={content.ctaDownload}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.cta}
        </StyledButton>
      )}
      {content.cta2 && (
        <StyledButton
          color={index % 2 === 0 ? "primary" : "info"}
          href={content.cta2Link}
          download={content.cta2Download}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.cta2}
        </StyledButton>
      )}
      {content.cta3 && (
        <StyledButton
          color={index % 2 === 0 ? "primary" : "info"}
          href={content.cta3Link}
          download={content.cta3Download}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.cta3}
        </StyledButton>
      )}
    </ButtonGroup>
  );
};
