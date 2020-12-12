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
import { spacing } from '../../theme';

const { REACT_APP_PLAID_ENVIRONMENT, REACT_APP_PLAID_KEY } = process.env;

const Details = styled.p`
  margin-bottom: ${spacing[5]};
`;

const CardIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default () => {
  const history = useHistory();
  const { user, api, setPageLoading, fetchUser } = React.useContext(AppContext);
  const onSuccess = useCallback(async (token, metadata) => {
    await api.setStripeToken(token, metadata.account_id);
    await fetchUser();
    setPageLoading(false);
    history.push("/payments");
  }, []);
  const config = {
    clientName: "BlockPower",
    env: REACT_APP_PLAID_ENVIRONMENT,
    product: ["auth", "transactions"],
    publicKey: REACT_APP_PLAID_KEY,
    onSuccess,
    // To avoid leaving the user briefly on what looks like a frozen page when
    // the Plaid Link UI closes, let's start the loading spinner as soon as
    // the Plaid Link window opens.  Conveniently, the Plaid Link window is
    // in the center of the page, so it covers up the loading spinner.
    onEvent: (event) => {
      if (event === 'OPEN') setPageLoading(true);
      if (event === 'EXIT') setPageLoading(false);
    }
  };
  const { open: openPlaid } = usePlaidLink(config);

  return <>
    <AddPage user={user} openPlaid={openPlaid} />
  </>;
};

export const AddPage = ({
  user,
  openPlaid,
}) => {
  const history = useHistory();

  return (
    <PageLayout
      title="Add Payment Account"
      header={
        <Breadcrumbs
          items={[
            { name: "Home", route: "/home" },
            { name: "Payments", route: "/payments" },
            { name: "Add" },
          ]}
        />
      }
    >
      {user.account ?
        <Details>You have already connected a payment account.</Details> :
        <Details>
          Please ensure that the details for your bank account
          exactly match your ambassador account.
          If the account name or other information does not match,
          your bank may not accept the funds.
        </Details>
      }

      <GridThreeUp>
        {
          user.paypal_approved &&
          <CardButton
            icon={<CardIcon src={paypal} />}
            title="Use PayPal"
            description="Get set up quickly to receive payments with PayPal."
            onClick={(e) => {
              e.preventDefault();
              history.push("/payments/paypal");
            }}
            disabled={user.account}
          />
        }
        <CardButton
          icon={<Finance24 />}
          title="Link bank account"
          description="Connect your bank account quickly and securely to receive payments."
          onClick={(e) => {
            e.preventDefault();
            openPlaid();
          }}
          disabled={user.account}
        />
        <CardButton
          icon={<CardIcon src={chime} />}
          title="Sign up for Chime"
          description="Chime is a new kind of bank. Open a free account in five minutes."
          onClick={() => {
            history.push("/payments/chime");
          }}
          disabled={user.account}
        />
      </GridThreeUp>
    </PageLayout>
  );
}
