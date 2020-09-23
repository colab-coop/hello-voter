import '../src/index.scss';

// https://github.com/mswjs/examples/tree/master/examples/with-storybook
//
// Storybook executes this module in both bootstap phase (Node)
// and a story's runtime (browser). However, cannot call `setupWorker`
// in Node environment, so need to check if we're in a browser.
if (typeof global.process === 'undefined') {
  const { worker } = require('../src/api/mocks')

  // Start the mocking when each story is loaded.
  // Repetitive calls to the `.start()` method do not register a new worker.
  worker.start()
}
