import React from "react";
import styled from "styled-components";
import { Devices24, Partnership24, Catalog24 } from "@carbon/icons-react";
import { GridThreeUp } from "../pageStyles";
import { spacing } from "../../theme";
import PageLayout from "../PageLayout";
import CardButton from "../CardButton";

const TopParagraph = styled.p`
  margin-bottom: ${spacing[7]};
`;

const {
  REACT_APP_HELP_URL,
  REACT_APP_HELP_TITLE,
  REACT_APP_HELP_EMAIL,
} = process.env;

export default () => (
  <PageLayout title="Help">
    <TopParagraph>Have questions? Here’s how to get answers.</TopParagraph>
    <GridThreeUp>
      <CardButton
        icon={<Catalog24 />}
        title="FAQ"
        description="See answers to common questions asked by other Voting Ambassadors"
        onClick={() => {
          window.open(REACT_APP_HELP_URL, "_blank");
        }}
      />
      <CardButton
        icon={<Partnership24 />}
        title={REACT_APP_HELP_TITLE}
        description={REACT_APP_HELP_EMAIL}
        onClick={() => {
          window.open(`mailto:${REACT_APP_HELP_EMAIL}`);
        }}
      />
    </GridThreeUp>
  </PageLayout>
);
