import React from "react";
import styled from "styled-components";
import { Button, InlineLoading } from "carbon-components-react";
import { useHistory } from "react-router-dom";
import { spacing, colors } from "../theme";
import ReactGA from "react-ga";

const ButtonStyled = styled(Button)`
  display: flex;
  justify-content: space-between;
  width: ${(props) => (props.micro ? "50%" : "100%")};
  max-width: 100%;
  padding-right: ${spacing[4]};
  margin-top: ${spacing[5]};
`;

const InlineLoadingStyled = styled(InlineLoading)`
  width: 100%;
  justify-content: center;
  height: ${spacing[5]};
`;

const PillButton = styled.div`
  border-radius: 32px;
  font-size: 12px;
  padding: ${spacing[2]} ${spacing[3]};
  background-color: ${colors.gray[20]};
  border: 2px solid ${colors.gray[20]};
  display: flex;
  align-items: center;
  white-space: nowrap;
  &:hover {
    border: 2px solid ${colors.blue[60]};
  }
`;

export default (props) => {
  const {
    href,
    children,
    kind,
    loading,
    onClick,
    pill,
    shouldRedirect,
    isAForm,
    trackingEvent,
    ...passThroughProps
  } = props;
  const history = useHistory();
  const redirect = async (href) => {
    history.push(href);
  };

  const track = async (trackingEvent) => {
    if (window.ga) {
      trackingEvent.label = history.location.pathname;
      trackingEvent.category = `ButtonClick`;
      ReactGA.event(trackingEvent);
    }
  };

  return pill ? (
    <PillButton
      onClick={(e) => {
        trackingEvent && track(trackingEvent);
        onClick && onClick(e);
        href && redirect(href);
      }}
      {...passThroughProps}
    >
      {children}
    </PillButton>
  ) : (
    <ButtonStyled
      kind={loading ? "ghost" : kind}
      onClick={(e) => {
        !shouldRedirect && !isAForm && e.preventDefault()
        trackingEvent && track(trackingEvent)
        onClick && onClick(e)
        href && !shouldRedirect && redirect(href)
        href && shouldRedirect && window.open(href, "_blank")
      }}
      {...passThroughProps}
    >
      {loading ? (
        <InlineLoadingStyled
          description=""
          status={!loading ? "finished" : "active"}
          aria-live={"off"}
        />
      ) : (
        children
      )}
    </ButtonStyled>
  );
};
