import React from "react";
import Menu from "../components/Menu";
import { PaymentsPage } from "../components/Payments/PaymentsPage";
import Add from "../components/Payments/AddPage";
import Chime from "../components/Payments/ChimePage";
import { MOCK_USER, MOCK_PAYMENTS_PENDING, MOCK_PAYMENTS_SETTLED } from '../api/mocks';

export default {
  title: "Payments",
};

export const PaymentsEmpty = () => (
  <>
    <Menu isApproved={true} />
    <PaymentsPage user={[]} payments={[]} />
  </>
);

export const PaymentsPending = () => (
  <>
    <Menu isApproved={true} />
    <PaymentsPage
      user={MOCK_USER}
      payments={MOCK_PAYMENTS_PENDING}
    />
  </>
);

export const PaymentsSettled = () => (
  <>
    <Menu isApproved={true} />
    <PaymentsPage
      user={MOCK_USER}
      payments={MOCK_PAYMENTS_SETTLED}
    />
  </>
);

export const PaymentsFull = () => (
  <>
    <Menu isApproved={true} />
    <PaymentsPage
      user={MOCK_USER}
      payments={[
        ...MOCK_PAYMENTS_PENDING,
        ...MOCK_PAYMENTS_SETTLED,
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
