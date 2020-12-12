## Coding guide

Welcome to the BlockPower Voting Ambassador Platform project!  BlockPower is a nonprofit focused on increasing voter turnout among Black citizens who don't vote regularly. BlockPower pays people in majority-Black neighborhoods to be "Voting Ambassadors" and talk with their friends, family members, and neighbors about the importance of voting. A Voting Ambassadors asks these friends, family members and neighbors to become "Vote Triplers" who will, in turn, remind 3 other people in their community to vote.This software platform enables Voting Ambassadors to find people they know in the database to text them through the platform about their commitment to be a Vote Tripler, and to receive payments for affirmative responses from their Vote Triplers.  

A simple sign-up form leads to the dashboard, where a Voting Ambassador can get started looking for people they know in the database. By default, the Voting Ambassador will be shown a list of people in their area (within a configurable number of meters from the Ambassador). This distance is calculated via the Neo4J apoc.distance function, using the Point data type either imported from CSV in the case of a Vote Tripler, or pulled from an external API (census.gov) in the case of Voting Ambassadors.  Voting Ambassadors can also find people they know in the list by setting a variety of search filters, including first and last name, phone number, metro area, age, gender and proximity. The Voting Ambassador can then "claim" a tripler by selecting one or more from the list. If a Vote Tripler is already claimed, no other Voting Ambassadors will see them in their lists going forward and therefore cannot claim an already claimed Vote Tripler.

Once the Ambassador has "claimed" one or more Vote Triplers, they can contact these Vote Triplers via standardized text (via a pool of Twilio longcodes) through the platform. The text will follow up with the Vote Tripler, prompting a confirmation from the Vote Tripler that they will remind 3 others to vote.  If that Vote Tripler responds "Yes" to the SMS, the system will record a pending payment for the Voting Ambassador. There is a maximum number of Vote Triplers each ambassador can claim that is configurable, as is payment amount. Voting Ambassadors can go through a simple process via Plaid-Link to login to their bank account and link it to the platform for payments via Stripe Connected Account (PayPal as another option to receive payments is coming soon).

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

- Node. We recommend installing via [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating). Run `nvm use` to install the working node version. 

### Installation

1. Copy `.env.example` to `.env` and modify as needed: `cp .env.example .env` (for details, see the **Environment Variables** section below)
2. Install dependencies: `npm install`
3. Make sure your `HOST` environment variable is unset, or set to `localhost`.
4. Start the server: `npm start`
5. You should now be able to visit your local front-end at http://localhost:3000/

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

- When signing up, if you get the error `Sorry, but state employment laws don't allow us to pay Voting Ambassadors in your state`, you can use this mock address in Georgia:

    391 West Paces Ferry Road NW
    Atlanta, GA 30305

### Environment Variables

Legacy code for Our Voice codebase. No adjustment needed for BlockPower.

REACT_APP_ORGID=VT6WX8A

Refers to associated WordPress on boarding site. No adjustment needed for BlockPower.

REACT_APP_AUDIANCE=blockpower.us

The URL path to the app root on this server.

REACT_APP_APP_PATH=/

oauth server. No adjustment needed for BlockPower.

REACT_APP_API_DOMAIN=gotv-vt.ourvoiceusa.org

Defines if we pass SSL to oauth server. No adjustment needed for BlockPower.

REACT_APP_API_SSL=true

Defines which header we take the token from. No adjustment needed for BlockPower.

REACT_APP_OAUTH_HEADER=x-sm-oauth-url

Defines which localStorage item the token is. No adjustment needed for BlockPower.

REACT_APP_TOKEN_KEY=token

No adjustment needed for BlockPower.

REACT_APP_KEY=auth

Defines if the app is in development mode. No adjustment needed for BlockPower.

REACT_APP_DEVELOPMENT=true

If set, targets the local mock data instead of REACT_APP_API_URL. Note: to disable, leave this value empty or commented out, do not set to "false".

REACT_APP_FORCE_MOCK_DATA=

REACT_APP_API_URL=https://blockpower.stage2.api.blockpower.vote

Defines the organization for each instance.

REACT_APP_ORG="BlockPower"

Defines the color of the header where ‘dark’ is black and ‘light’ is white

REACT_APP_HEADER=dark

Defines the logo to use for the header. Logos can be found per organization in /src/assets/logos/

REACT_APP_LOGO=block-power

Defines whether Payments page should appear in each instance. If Payments page should not be visible to Ambassadors, remove this env var.

REACT_APP_PAYMENT_FEATURE=true

Defines the payment amount that should display for Ambassador’s upgraded Tripler bonus payments for each instance. 

Related env var in backend env vars 

REACT_APP_TRIPLER_PAYMENT_AMT="30"

Defines the payment amount that should display for Ambassador’s confirmed Tripler payments for each instance.

Related env var in backend env vars 

REACT_APP_AMBASSADOR_PAYMENT_AMT="25"

Sets google analytics property for tracking. Do not change.

REACT_APP_GA_TRACKING_ID=UA-172693622-1

Sets Plaid key to be used for production or dev/QA purposes. Keep ‘fake’ for development.

REACT_APP_PLAID_KEY=fake

Sets the URL that appears on the /help page for each instance.

REACT_APP_HELP_URL="https://www.blockpower.vote/faq-blockpower""

Sets the URL that appears on the /help page for each instance.

REACT_APP_HELP_TITLE="BlockPower Support"

Sets the help email address that appears on the /help page for each instance.

REACT_APP_HELP_EMAIL="support+bp@blockpower.vote"

Defines whether any reference to payment for confirmed Triplers or Tripler upgrade bonuses should appear at all. If Volunteers instance with no payment for Ambassadors, remove this env var

REACT_APP_NONVOLUNTEER_PAYMENT_FEATURE=true

To disable the components of the UI that are for tripler upgrades to ambassador accounts

REACT_APP_DISABLE_TRIPLER_UPGRADE_UI=true

To disallow signups set this to true:

REACT_APP_NO_NEW_SIGNUPS=

Activates embedded HubSpot chat if true

REACT_APP_ENABLE_HUBSPOT=false

Sets metro area strings in triplers search filter dropdown:

REACT_APP_METRO_AREAS: "Atlanta;Augusta;Savannah;Columbus;Macon;Athens;Albany;Gainesville;Brunswick;Waldosta;Warner Robbins;Dalton;Hinesville;Rome;GA other"

Sets HubSpot Chat URL:

REACT_APP_HUBSPOT_CHAT_SCRIPT_URL: "https://js.hs-scripts.com/8868419.js"

Sets the URL for the link on the Account Locked page:

REACT_APP_ACCOUNT_LOCKED_REVIEW_URL: "https://blockpower.link/manualreview"

Sets the URL for the link on the Account Unapproved page:

REACT_APP_ACCOUNT_UNAPPROVED_REVIEW_URL: "https://blockpower.link/manualreview"

Sets the URL for the link on the /chime page:

REACT_APP_CHIME_URL: "https://chime.com"

Sets the URL for the redirect after an ambassador is approved following signup:

REACT_APP_TRAINING_URL: "https://www.blockpower.vote/ambassadors/civics"

Sets the plaid environment:

REACT_APP_PLAID_ENVIRONMENT: "production"
