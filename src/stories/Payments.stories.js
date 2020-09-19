import React from "react";
import Menu from "../components/Menu";
import Payments from "../components/Payments/PaymentsPage";
import Add from "../components/Payments/AddPage";
import Chime from "../components/Payments/ChimePage";
import { AppProvider } from '../api/AppContext';
import { MOCK_USER } from '../api/mocks';

const { REACT_APP_TRIPLER_PAYMENT_AMT } = process.env;

export default {
  title: "Payments",
};

function Wrapper({ children }) {
  return (
    <AppProvider overrides={{ user: MOCK_USER }}>
      {children}
    </AppProvider>
  )
}

export const PaymentsEmpty = () => (
  <Wrapper>
    <Menu isApproved={true} />
    <Payments user={[]} payments={[]} />
  </Wrapper>
);

export const PaymentsPending = () => (
  <>
    <Menu isApproved={true} />
    <Payments
      user={{
        payout_provider: "stripe",
        account: {
          account_data: {
            last4: "1234",
          },
        },
      }}
      payments={[
        {
          id: "a",
          tripler_name: "Epison Shepherd",
          formatted_disbursed_at: "June 09",
          formatted_amount: REACT_APP_TRIPLER_PAYMENT_AMT,
          status: "pending",
        },
        {
          id: "b",
          tripler_name: "Lauren Ralph",
          formatted_disbursed_at: "June 10",
          formatted_amount: REACT_APP_TRIPLER_PAYMENT_AMT,
          status: "pending",
        },
      ]}
    />
  </>
);

export const PaymentsSettled = () => (
  <>
    <Menu isApproved={true} />
    <Payments
      user={{
        payout_provider: "stripe",
        account: {
          account_data: {
            last4: "1234",
          },
        },
      }}
      payments={[
        {
          id: "a",
          tripler_name: "Rebekah Tripler",
          formatted_disbursed_at: "June 09",
          formatted_amount: REACT_APP_TRIPLER_PAYMENT_AMT,
          status: "settled",
        },
        {
          id: "b",
          tripler_name: "Desee Something",
          formatted_disbursed_at: "June 10",
          formatted_amount: REACT_APP_TRIPLER_PAYMENT_AMT,
          status: "settled",
        },
      ]}
    />
  </>
);

export const PaymentsFull = () => (
  <>
    <Menu isApproved={true} />
    <Payments
      user={{
        payout_provider: "stripe",
        account: {
          account_data: {
            last4: "1234",
          },
        },
      }}
      payments={[
        {
          id: "a",
          tripler_name: "Epison Shepherd",
          formatted_disbursed_at: "June 09",
          formatted_amount: REACT_APP_TRIPLER_PAYMENT_AMT,
          status: "pending",
        },
        {
          id: "b",
          tripler_name: "Lauren Ralph",
          formatted_disbursed_at: "June 10",
          formatted_amount: REACT_APP_TRIPLER_PAYMENT_AMT,
          status: "pending",
        },
        {
          id: "c",
          tripler_name: "Rebekah Tripler",
          formatted_disbursed_at: "June 09",
          formatted_amount: REACT_APP_TRIPLER_PAYMENT_AMT,
          status: "settled",
        },
        {
          id: "d",
          tripler_name: "Desee Something",
          formatted_disbursed_at: "June 10",
          formatted_amount: REACT_APP_TRIPLER_PAYMENT_AMT,
          status: "settled",
        },
      ]}
    />
  </>
);

export const AddPage = () => (
  <>
    <Menu isApproved={true} />
    <Add />
  </>
);

export const ChimePage = () => (
  <>
    <Menu isApproved={true} />
    <Chime />
  </>
);
