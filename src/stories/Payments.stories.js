import React from 'react'
import Payments from '../components/Payments/PaymentsPage'

const { REACT_APP_TRIPLER_PAYMENT_AMT } = process.env

export default {
  title: 'Payments'
}

export const PaymentsEmptyPage = () => (
  <Payments payments={[]} stripeAcct />
)

export const PendingPayments = () => (
  <Payments
    payments={[
      {
        id: 'a',
        date: 'Jun 09',
        tripler: 'Epison Shepherd',
        amount: `$${REACT_APP_TRIPLER_PAYMENT_AMT}`,
        status: 'pending'
      },
      {
        id: 'b',
        date: 'June 10',
        tripler: 'Lauren Ralph',
        amount: `$${REACT_APP_TRIPLER_PAYMENT_AMT}`,
        status: 'pending'
      },
    ]}
  />
);

export const CompletedPayments = () => (
  <Payments
    payments={[
      {
        id: "a",
        date: "Jun 09",
        tripler: "Rebekah Tripler",
        amount: `$${REACT_APP_TRIPLER_PAYMENT_AMT}`,
        status: "completed",
      },
      {
        id: "b",
        date: "June 10",
        tripler: "Desee Something",
        amount: `$${REACT_APP_TRIPLER_PAYMENT_AMT}`,
        status: "completed",
      },
    ]}
  />
);

export const PaymentsFilled = () => (
  <Payments
    payments={[
      {
        id: 'a',
        date: 'Jun 09',
        tripler: 'Epison Shepherd',
        amount: `$${REACT_APP_TRIPLER_PAYMENT_AMT}`,
        status: 'pending'
      },
      {
        id: 'b',
        date: 'June 10',
        tripler: 'Lauren Ralph',
        amount: `$${REACT_APP_TRIPLER_PAYMENT_AMT}`,
        status: 'pending'
      },
      {
        id: "c",
        date: "Jun 09",
        tripler: "Rebekah Tripler",
        amount: `$${REACT_APP_TRIPLER_PAYMENT_AMT}`,
        status: "completed",
      },
      {
        id: "d",
        date: "June 10",
        tripler: "Desee Something",
        amount: `$${REACT_APP_TRIPLER_PAYMENT_AMT}`,
        status: "completed",
      },
    ]}
  />
);

// export const AddPage = () => (
//   <Add 
//     triplers={
      
//     } 
//   />
// )

// export const ConfirmPage = () => (
//   <Confirm />
// )