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

### Installation

Before starting the server, copy .env.example to .env.
```
npm install
npm start
```

And you should be good to go. If you want to see storybook stuff, execute
```
npm run storybook
```

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

----

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
