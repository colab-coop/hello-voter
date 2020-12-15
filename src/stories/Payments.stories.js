import React from "react";
import Menu from "../components/Menu";
import { PaymentsPage } from "../components/Payments/PaymentsPage";
import { AddPage } from "../components/Payments/AddPage";
import Chime from "../components/Payments/ChimePage";
import { MAIN_USER } from './Home.mocks';
import { PAYMENTS_PENDING, PAYMENTS_SETTLED } from './Payments.mocks';

export default {
  title: "Payments",
};

const defaultProps = {
  user: MAIN_USER,
  payments: []
}

const defaultAddProps = {
  user: MAIN_USER,
  openPlaid: () => {},
}

export const PaymentsEmpty = () => (
  <>
    <Menu isApproved={true} />
    <PaymentsPage
      {...defaultProps}
      user={[]}
    />
  </>
);

export const PaymentsPending = () => (
  <>
    <Menu isApproved={true} />
    <PaymentsPage
      {...defaultProps}
      payments={PAYMENTS_PENDING}
    />
  </>
);

export const PaymentsSettled = () => (
  <>
    <Menu isApproved={true} />
    <PaymentsPage
      {...defaultProps}
      payments={PAYMENTS_SETTLED}
    />
  </>
);

export const PaymentsFull = () => (
  <>
    <Menu isApproved={true} />
    <PaymentsPage
      {...defaultProps}
      payments={[
        ...PAYMENTS_PENDING,
        ...PAYMENTS_SETTLED,
      ]}
    />
  </>
);

export const AddBank = () => (
  <>
    <Menu isApproved={true} />
    <AddPage
      {...defaultAddProps}
      user={{
        ...defaultAddProps.user,
        account: null
      }}
    />
  </>
);

export const AddBankWithExistingProvider = () => (
  <>
    <Menu isApproved={true} />
    <AddPage
      {...defaultAddProps}
      user={{
        ...defaultAddProps.user,
        account: {
          id: 'uuid-1234',
          account_id: '123456789',
          account_type: 'stripe',
          account_data: '{"last4": "6789"}'
        }
      }}
    />
  </>
);

export const ChimePage = () => (
  <>
    <Menu isApproved={true} />
    <Chime />
  </>
);
