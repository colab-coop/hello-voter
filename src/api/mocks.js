import { setupWorker, rest } from 'msw'
import {
  AMBASSADOR_URL,
  PAYMENT_HISTORY_URL,
  TRIPLERS_URL,
  TRIPLERS_LIMIT_URL,
  FREE_TRIPLERS_URL,
  TRIPLER_URL,
  STRIPE_PAYMENT_URL,
  PAYPAL_PAYMENT_URL
} from '../constants';
import { TRIPLERS_FULL_WITH_AMBASSADOR, TRIPLERS_TO_ADD } from '../stories/Triplers.mocks';
import { MAIN_USER } from '../stories/Home.mocks';
import { PAYMENTS_PENDING, PAYMENTS_SETTLED } from '../stories/Payments.mocks';

// Export the worker instance, so we can await the activation on Storybook's runtime.
// You can use this reference to start the worker for local development as well.
export const worker = setupWorker(
  rest.get(AMBASSADOR_URL, (req, res, ctx) => {
    return res(ctx.json(MAIN_USER))
  }),
  rest.get(TRIPLERS_URL, (req, res, ctx) => {
    return res(ctx.json(TRIPLERS_FULL_WITH_AMBASSADOR))
  }),
  rest.get(FREE_TRIPLERS_URL, (req, res, ctx) => {
    return res(ctx.json(TRIPLERS_TO_ADD))
  }),
  rest.get(TRIPLER_URL, (req, res, ctx) => {
    // TODO: Filter this list based on `?firstName=foo&lastName=bar`
    return res(ctx.json(TRIPLERS_TO_ADD))
  }),
  rest.put(TRIPLERS_URL, (req, res, ctx) => {
    return res(ctx.json({}))
  }),
  rest.get(TRIPLERS_LIMIT_URL, (req, res, ctx) => {
    return res(ctx.json({
      "limit": "10"
    }))
  }),
  rest.post(STRIPE_PAYMENT_URL, (req, res, ctx) => {
    return res(ctx.json({}))
  }),
  rest.post(PAYPAL_PAYMENT_URL, (req, res, ctx) => {
    return res(ctx.json({}))
  }),
  rest.get(PAYMENT_HISTORY_URL, (req, res, ctx) => {
    return res(ctx.json([
      ...PAYMENTS_PENDING,
      ...PAYMENTS_SETTLED,
    ]))
  })
)
