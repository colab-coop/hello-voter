import React, { useCallback } from "react";
import { Finance24 } from "@carbon/icons-react";
import styled from "styled-components";
import { GridThreeUp } from "../pageStyles";
import PageLayout from "../PageLayout";
import CardButton from "../CardButton";
import Breadcrumbs from "../Breadcrumbs";
import chime from "../../assets/images/chime.png";
import paypal from "../../assets/images/paypal.png";
import { usePlaidLink } from "react-plaid-link";
import { AppContext } from "../../api/AppContext";
import { useHistory } from "react-router-dom";

const { REACT_APP_PLAID_KEY } = process.env;

const CardIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default () => {
  const history = useHistory();
  const { api, fetchUser } = React.useContext(AppContext);
  const onSuccess = useCallback(async (token, metadata) => {
    await api.setToken(token, metadata.account_id);
    await fetchUser();
    history.push("/payments");
  }, []);
  const config = {
    clientName: "BlockPower",
    env: "sandbox",
    product: ["auth", "transactions"],
    publicKey: REACT_APP_PLAID_KEY,
    onSuccess,
  };
  const { open: openPlaid } = usePlaidLink(config);
  return (
    <PageLayout
      title="Add Payment Account"
      header={
        <Breadcrumbs
          items={[
            {
              name: "Home",
              route: "/home",
            },
            {
              name: "Payments",
              route: "/payments",
            },
            {
              name: "Add",
            },
          ]}
        />
      }
    >
      <GridThreeUp>
        <CardButton
          icon={<CardIcon src={paypal} />}
          title="Use PayPal"
          description="Get set up quickly to receive payments with PayPal."
          onClick={(e) => {
            history.push("/payments/paypal");
          }}
        />
        <CardButton
          icon={<Finance24 />}
          title="Use existing account"
          description="Connect your bank account to receive payments immediately."
          onClick={(e) => {
            e.preventDefault();
            openPlaid();
          }}
        />
        <CardButton
          icon={<CardIcon src={chime} />}
          title="Sign up for Chime"
          description="Chime is a new kind of bank. Open a free account in five minutes."
          onClick={() => {
            history.push("/payments/chime");
          }}
        />
      </GridThreeUp>
    </PageLayout>
  );
};
