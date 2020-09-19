## Coding guide

This software enables a "Voting Ambassador" workflow for get-out-the-vote campaigns. A Vote Ambassador signs up with the hello-voter React front-end. The Vote Ambassador, once signed up, is provided a list of voters in their area (within some configurable number of meters from the Ambassador). The Vote Ambassador contacts these voters (called Vote Triplers) and encourages them to help 3 additional people vote (called simply Voters in UI, or "Triplees" in the code). Once the Vote Tripler responds "YES" to the system's SMS (this software assumes Twilio SMS integration), the Vote Ambassador will receive payment from the organization who has set up this software. Currently this software assumes payment via Stripe + Plaid, and some partner organizations do not have in-app payments.

### Files
```
|____components  - all the components of the app
|____stories - storybook stories for components of the app
|____theme - theme variables for spacing, colors, breakpoints (taken from carbon design system)
|____hooks - various react hooks for different functionality
|____api - api calls
|____assets - various assets for the app
| |____logos
| |____icons
```

### Prerequisites

- Node. We recommend installing via [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating).

### Installation

1. Copy `.env.example` to `.env`: `cp .env.example .env`
1. Install dependencies: `npm install`
1. Start the server: `npm start`

Optionally,

1. If you want to see storybook stuff: `npm run storybook`

### Testing

We use [React Testing Library](https://testing-library.com/docs/intro) for unit tests (similar to Jest + Enzyme)
and [Cypress](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html) for integration tests.
Learn more about testing React apps [here](https://reactjs.org/docs/testing.html).

- To run unit tests: `npm test`. This will launch the test runner in "interactive" mode.

### Styling

In terms of styling, we use [styled-components](https://github.com/styled-components/styled-components) and [react-carbon](https://github.com/carbon-design-system/carbon-components-react).

### App Router
```
/home
/login

/ambassador/signup - standard signup

/help
/privacy
/terms

/triplers
/triplers/add
/triplers/confirm/:triplerId

/payments
/payments/add
/payments/chime
````

### Components
```
<Breadcrumbs> - Breadcrumbs on most pages
<Button> - Main button component
<CardButton> - Card button found on Home page, Help page, etc.
<LoginButton> - Button on Login page
<Footer> - Footer on all pages
<Menu> - Menu Header on all pages
<PageLayout> - Layout on all pages
```

### CI/CD

- Merge into `ambassador-stage` branch to view on staging server
- Merge into `ambassador` branch to view on production server

### Troubleshooting

- When signing up, if you see: `Sorry, but state employment laws don't allow us to pay Voting Ambassadors in your state.` you can use the following mock address:

      1300 E Park Ave
      Tallahassee, FL 32301
