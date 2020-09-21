import { setupWorker, rest } from 'msw'
import { AMBASSADOR_URL, PAYMENT_HISTORY_URL } from '../constants';
const { REACT_APP_TRIPLER_PAYMENT_AMT } = process.env;

export const MOCK_USER = {
  "id": "fake123",
  "external_id": "google:123",
  "date_of_birth": "1/1/1990",
  "first_name": "BP",
  "last_name": "Tester",
  "phone": "13135551212",
  "email": "test@example.com",
  "location": {
    "srid": {
      "low": 4326,
      "high": 0
    },
    "x": -84.261336,
    "y": 30.442406
  },
  "signup_completed": true,
  "onboarding_completed": true,
  "approved": true,
  "locked": false,
  "payout_provider": "stripe",
  "payout_additional_data": null,
  "admin": false,
  "address": {
    "address1": "1300 E Park Ave",
    "state": "FL",
    "zip": "32301",
    "city": "Tallahassee"
  },
  "display_address": "1300 E Park Ave, Tallahassee, FL, 32301",
  "display_name": "BP Tester",
  "quiz_results": null,
  "account": {
    "account_data": {
      "last4": "1234",
    },
  },
}

export const MOCK_PAYMENTS_PENDING = [
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

export const MOCK_PAYMENTS_SETTLED = [
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

// Export the worker instance, so we can await the activation on Storybook's runtime.
// You can use this reference to start the worker for local development as well.
export const worker = setupWorker(
  rest.get(AMBASSADOR_URL, (req, res, ctx) => {
    return res(ctx.json(MOCK_USER))
  }),
  rest.get(PAYMENT_HISTORY_URL, (req, res, ctx) => {
    return res(ctx.json([
      ...MOCK_PAYMENTS_PENDING,
      ...MOCK_PAYMENTS_SETTLED,
    ]))
  })
)
