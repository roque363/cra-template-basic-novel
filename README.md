# cra-template-basic-novel

# A quick start Create React App template

Original Create React App README available [here Create React App](https://github.com/facebook/create-react-app)

## Usage

```bash
npx create-react-app your-project-name --template basic-novel
```

`npx` command installs the most recent stable version of CRA from npm.

`--template` parameter points to this template, note that `cra-template-` prefix is omitted.

## Available Scripts

In the project directory, you can run:

- `npm start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `npm test` - launches the test runner in the interactive watch mode.

- `npm build` - builds the app for production to the `build` folder.

- `npm eject` - exposes content of `react-script` package

## Project Layout

    .
    ├── build                   # Compiled files, production-ready build.
    ├── public                  # Static files.
    ├── src                     # Source files.
    |   ├── assets              # All the static assets reside here.
    |   ├── components          # Only shared components used across features are placed here.
    |   ├── constants
    |   ├── layouts
    |   ├── navigation          # The routing logic.
    |   ├── services            # Services are to manage all api requests.
    |   ├── styles              # This module holds our application-level styles.
    |   ├── utils               # Utility/helper methods, validations, etc. that can be shared across our entire project are adde here.
    |   └── views               # All the various features/screens/pages are defined here.
    ├── .eslintrc.json
    ├── .prettierrc
    ├── .gitignore
    ├── jsconfig.json
    └── README.md

## [Prettier](https://prettier.io/)

I added `prettier` to force consistent formatting. Don't like trailing semicolons? Feel free to [tweak prettier rules](https://prettier.io/docs/en/configuration.html) inside `.prettierrc` file to match your code style.

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
