<p align="middle">
  <img src="https://www.rifos.org/assets/img/logo.svg" alt="logo" height="100" >
</p>
<h3 align="middle"><code>ramp-react-demo</code></h3>
<p align="middle">
  A proof of concept for using Ramp.network
</p>

## Description:

This is a very simple proof of concept using ramp to purchase rDOC inside of a dapp. For this example, after connecting with [rLogin](https://github.com/rsksmart/rlogin), the user can then buy rDOC through Ramp. The (checksummed) address is passed to their widget and the user completes the transaction there.

For testing the bank transfer, use the following steps:

1. click 'buy rDOC'
2. change the amounts if you want and **click proceed**
3. enter your email address and confirm if needed
4. under 'Endter your RSK Wallet address', this address is passed from the provider given by rLogin.
5. on choose payment method, **change country to *test***, then click on **manual bank transfer**, click **proceed**.
6. click **buy now**
7. click the checkbox **I've transferred the funds...** then click **complete**
8. click on **view reciept** and in the new window scroll all the way to the bottom and click on **Release the funds (test environments only)**.


## Available Scripts

### `yarn`

Install project dependencies

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Runs the tests, displays coverage, and runs the linter. See below for more specific commands

#### `yarn test:watch`

Launches the test runner in the interactive watch mode.

#### `yarn test:coverage`

Runs the test coverage and saves the report in the`coverage` folder.

#### `yarn lint`

Runs the linter and returns status.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### CI scripts

#### `yarn test:ci`

Runs the test coverage and saves the report in the`reports` folder. Uses `maxWorkers=2` - CircleCI recommendation

#### `yarn test:ci`

Runs the linter and saves the report in the`reports` folder.

## Knowledge base

This project was bootstrapped with the Typescript tempalte of [Create React App](https://github.com/facebook/create-react-app) and added Eslint, CircleCI, and Enzyme testing utility.

Current React.js version: `v17.0.1`, but Enzyme is set up for `v16` - this will be upgraded when Enzyme releases a new version.
