import React from "react";
import Menu from "../components/Menu";
import { PaymentsPage } from "../components/Payments/PaymentsPage";
import Add from "../components/Payments/AddPage";
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
