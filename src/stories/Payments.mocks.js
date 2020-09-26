const { REACT_APP_TRIPLER_PAYMENT_AMT } = process.env;

export const PAYMENTS_PENDING = [
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
]

export const PAYMENTS_SETTLED = [
  {
    id: "c",
    tripler_name: "Rebekah Tripler",
    formatted_disbursed_at: "June 09",
    formatted_amount: REACT_APP_TRIPLER_PAYMENT_AMT,
    status: "settled",
  },
  {
    id: "d",
    tripler_name: "Desee Tripler",
    formatted_disbursed_at: "June 10",
    formatted_amount: REACT_APP_TRIPLER_PAYMENT_AMT,
    status: "settled",
  },
]
