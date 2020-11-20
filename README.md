## Coding guide

Welcome to the BlockPower Voting Ambassador Platform project!  BlockPower is a nonprofit focused on increasing voter turnout among Black citizens who don't vote regularly. BlockPower pays people in majority-Black neighborhoods to be "Voting Ambassadors" and talk with their friends, family members, and neighbors about the importance of voting. A Voting Ambassadors asks these friends, family members and neighbors to become "Vote Triplers" who will, in turn, remind 3 other people in their community to vote.This software platform enables Voting Ambassadors to find people they know in the database to text them through the platform about their commitment to be a Vote Tripler, and to receive payments for affirmative responses from their Vote Triplers.  A simple sign-up form leads to the dashboard, where a Voting Ambassador can get started looking for people they know in the database. By default, the Voting Ambassador will be shown a list of people in their area (within a configurable number of meters from the Ambassador). This distance is calculated via the Neo4J apoc.distance function, using the Point data type either imported from CSV in the case of a Vote Tripler, or pulled from an external API (census.gov) in the case of Voting Ambassadors.  Voting Ambassadors can also find people they know in the list by setting a variety of search filters, including first and last name, phone number, metro area, age, gender and proximity. The Voting Ambassador can then "claim" a tripler by selecting one or more from the list. If a Vote Tripler is already claimed, no other Voting Ambassadors will see them in their lists going forward and therefore cannot claim an already claimed Vote Tripler.Once the Ambassador has "claimed" one or more Vote Triplers, they can contact these Vote Triplers via standardized text (via a pool of Twilio longcodes) through the platform . The text will follow up with the Vote Tripler, prompting a confirmation from the Vote Tripler that they will remind 3 others to vote.  If that Vote Tripler responds "Yes" to the SMS, the system will record a pending payment for the Voting Ambassador. There is a maximum number of Vote Triplers each ambassador can claim that is configurable, as is payment amount. Voting Ambassadors can go through a simple process via Plaid-Link to login to their bank account and link it to the platform for payments via Stripe Connected Account (PayPal as another option to receive payments is coming soon).

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

1. Copy `.env.example` to `.env` and modify as needed: `cp .env.example .env`
   1A. If you want to use mock data offline, add the env var: `REACT_APP_FORCE_MOCK_DATA=true`
   1B. If you want to target staging data, then don’t include `REACT_APP_FORCE_MOCK_DATA=`
      and ensure the REACT_APP_API_URL is set to the stage api url: `REACT_APP_API_URL=https://blockpower.stage2.api.blockpower.vote`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

Optionally,

1. If you want to explore the app in [Storybook](https://storybook.js.org/): `npm run storybook`

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
```

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
