# React Native Boilerplate

## Introduction

Welcome to the React Native Boilerplate! This boilerplate is designed to kickstart your React Native projects with a solid foundation, best practices, prebuilt screens like Welcome, Login, SignUp,OTP Forgot Password and Bottom TabBar, and commonly used libraries preconfigured.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

[Node.js](https://nodejs.org/en)

[npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

#### 1. Clone the repository:

```bash
git clone https://github.com/uma130012/RNBP.git
```

> checkout from `main` branch

```bash
git fetch --all
git checkout origin/main
```

> for preconfigured `env` with multiple environments with **flavors** & **schema** then checkout from `env_config` branch

```bash
git checkout origin/env_config
```

#### 2. Navigate to the project directory:

```bash
cd RNBP
```

#### 3. Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the App

#### For Android

```bash
# using npm
npm run android

# for read env files with multiple flavors
npm run android-stage
npm run android-qa
npm run android-prod

# for release build with multiple flavors
npm run android-stage-release
npm run android-qa-release
npm run android-prod-release

# for release bundle build with multiple flavors
npm run android-stage-bundle
npm run android-qa-bundle
npm run android-prod-bundle

```

#### For iOS

> **INFO** :- If you are having trouble with iOS, try to reinstall the dependencies by running:

1. `cd ios` to navigate to the `ios` folder.
2. `bundle install` to install `Bundler`
3. `bundle exec pod install` to install the iOS dependencies managed by CocoaPods.

```bash
# using npm
npm run ios

# for read env files
npm run ios-stage
npm run ios-qa
npm run ios-prod

```

> **Note**: For more command details check out the `package.json` scripts

## Project Structure

The project structure follows a modular pattern for easy maintenance and scalability:

- **src:** Contains the source code of the React Native application, and every folder contains barrel files `index.ts` to import different files from a unique path.
  - **assets:** Images, fonts, and other static assets.
  - **components:** Reusable UI components.
  - **navigation:** Navigation setup and configurations.
  - **screens:** App screens and their components, and every components folder contains:
    - `screenName.tsx`: _The TypeScript file for the component._
    - `model.d.ts`: _The file would typically define the expected structure and types of data that your application expects from the API._
    - `style.ts`: _The styles for the component._
    - `helper.ts`: _Any helper functions related to the component._
  - **redux:** Redux store, actions, and reducers.
  - **services:** Network services, Socket services.
  - **hooks:** Custom React hooks for shared logic.
  - **i18n:** Internationalization setup and language files.
  - **theme:** Theme-related files for consistent styling.
  - **types:** TypeScript type definitions.
  - **utils:** General utility functions.

## Features

- **React Navigation:** Integrated navigation for a smooth user experience.
- **Redux:** State management for your application. Built with `redux-persit`,`redux-saga`,`redux-toolkit`.
- **Axios:** Configured HTTP client for making API requests.
- **Formik & Yup:** Form handling with Formik for a simplified and efficient form development process, combined with Yup for schema validation.
- **i18next:** Internationalization for supporting multiple languages.
- **Keychain:** Securely manage and store sensitive information.
- **Socket.io:** Real-time communication for interactive features.
- **Appearance:** Automatically handle light and dark mode based on device appearance.
- **Internet Info:** Managing network connection.
- **React Native Config `.env`:** Manage different environments with multiple flavors & schema.

## Upcoming Features

- **Screenshot Prevention**
- **Deep Linking**
- **Code Obfuscation**
- **Rooted/Jailbroken Device Detection**
- **SSL Pinning**
- **CodePush**:

## Authors

- [Uma Shankar](https://github.com/uma130012/RNBP)

## Support

If you find this project helpful, please consider giving it a star on GitHub! ⭐

## Feedback

If you have any feedback, please reach out to us at umashankarhajipur@gmail.com

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/uma-s-b8b256155)
