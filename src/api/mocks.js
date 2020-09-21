import { setupWorker, rest } from 'msw'
import { AMBASSADOR_URL, PAYMENT_HISTORY_URL, TRIPLERS_URL, TRIPLERS_LIMIT_URL, FREE_TRIPLERS_URL } from '../constants';
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
    return res(ctx.json([TRIPLERS_TO_ADD]))
  }),
  rest.get(TRIPLERS_LIMIT_URL, (req, res, ctx) => {
    return res(ctx.json({
      "limit": "10"
    }))
  }),
  rest.get(PAYMENT_HISTORY_URL, (req, res, ctx) => {
    return res(ctx.json([
      ...PAYMENTS_PENDING,
      ...PAYMENTS_SETTLED,
    ]))
  })
)
