import React from 'react'
import Payments from '../components/Payments/PaymentsPage'

const { REACT_APP_TRIPLER_PAYMENT_AMT } = process.env

export default {
  title: 'Payments'
}

export const PaymentsEmptyPage = () => (
  <Payments payments={[]} />
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
    plaidAcct={{
      "accounts": [{
        "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
        "balances": {
          "available": 100,
          "current": 110,
          "limit": null,
          "iso_currency_code": "USD",
          "unofficial_currency_code": null,
        },
        "mask": "9606",
        "name": "Plaid Checking",
        "official_name": "Plaid Gold Checking",
        "subtype": "checking",
        "type": "depository"
      }],
      "numbers": {
        "ach": [{
          "account": "9900009606",
          "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
          "routing": "011401533",
          "wire_routing": "021000021"
        }],
        "eft":[{
          "account": "111122223333",
          "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
          "institution": "021",
          "branch": "01140"
        }],
        "international":[{
          "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
          "bic": "NWBKGB21",
          "iban": "GB29NWBK60161331926819",
        }],
        "bacs":[{
          "account": "31926819",
          "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
          "sort_code": "601613"
        }]
      },
      // "item": {Object},
      "request_id": "m8MDnv9okwxFNBV"
    }}
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
    plaidAcct={{
      "accounts": [{
        "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
        "balances": {
          "available": 100,
          "current": 110,
          "limit": null,
          "iso_currency_code": "USD",
          "unofficial_currency_code": null,
        },
        "mask": "9606",
        "name": "Plaid Checking",
        "official_name": "Plaid Gold Checking",
        "subtype": "checking",
        "type": "depository"
      }],
      "numbers": {
        "ach": [{
          "account": "9900009606",
          "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
          "routing": "011401533",
          "wire_routing": "021000021"
        }],
        "eft":[{
          "account": "111122223333",
          "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
          "institution": "021",
          "branch": "01140"
        }],
        "international":[{
          "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
          "bic": "NWBKGB21",
          "iban": "GB29NWBK60161331926819",
        }],
        "bacs":[{
          "account": "31926819",
          "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
          "sort_code": "601613"
        }]
      },
      // "item": {Object},
      "request_id": "m8MDnv9okwxFNBV"
    }}
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
    plaidAcct={{
      "accounts": [{
        "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
        "balances": {
          "available": 100,
          "current": 110,
          "limit": null,
          "iso_currency_code": "USD",
          "unofficial_currency_code": null,
        },
        "mask": "9606",
        "name": "Plaid Checking",
        "official_name": "Plaid Gold Checking",
        "subtype": "checking",
        "type": "depository"
      }],
      "numbers": {
        "ach": [{
          "account": "9900009606",
          "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
          "routing": "011401533",
          "wire_routing": "021000021"
        }],
        "eft":[{
          "account": "111122223333",
          "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
          "institution": "021",
          "branch": "01140"
        }],
        "international":[{
          "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
          "bic": "NWBKGB21",
          "iban": "GB29NWBK60161331926819",
        }],
        "bacs":[{
          "account": "31926819",
          "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
          "sort_code": "601613"
        }]
      },
      // "item": {Object},
      "request_id": "m8MDnv9okwxFNBV"
    }}
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