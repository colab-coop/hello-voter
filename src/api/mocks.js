import { setupWorker, rest } from 'msw'
import { AMBASSADOR_URL, PAYMENT_HISTORY_URL } from '../constants';

export const MOCK_USER = {
  payout_provider: "stripe",
  account: {
    account_data: {
      last4: "1234",
    },
  },
}

// Export the worker instance, so we can await the activation on Storybook's runtime.
// You can use this reference to start the worker for local development as well.
export const worker = setupWorker(
  rest.get(AMBASSADOR_URL, (req, res, ctx) => {
    return res(ctx.json(MOCK_USER))
  }),
  rest.get(PAYMENT_HISTORY_URL, (req, res, ctx) => {
    return res(ctx.json([]))
  })
)
