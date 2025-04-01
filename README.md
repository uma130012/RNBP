# 🚀 React Native Boilerplate

## 👋 Introduction

Welcome to the **React Native Boilerplate!** This boilerplate is designed to kickstart your React Native projects with a solid foundation, best practices, and prebuilt screens such as **Welcome, Login, SignUp, OTP, Forgot Password, and Bottom TabBar**. It also comes with commonly used libraries preconfigured for seamless development.

## 🛠 Getting Started

### ⚙️ Prerequisites

Before you begin, make sure you have the following tools installed on your machine:

[Node.js](https://nodejs.org/en)

[npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### 💻 Installation

#### 1. Clone the repository:

```bash
git clone https://github.com/uma130012/RNBP.git
```

> checkout from `main` branch

```bash
git fetch --all
git checkout origin/main
```

> If you need preconfigured environments with multiple flavors & schemas, checkout from the `env_config` branch:

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

### 🚀 Running the App

#### 📱 For Android

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

####  For iOS

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

> **Note**: For further command details, check the `scripts` section in the `package.json`.

## 🗂 Project Structure

The project follows a modular architecture, making it scalable and easy to maintain. Below is the directory structure of the project:

```bash
RNBP/
├── src/                       # Source code for the React Native app
│   ├── assets/                # Static assets (images, fonts, etc.)
│   ├── components/            # Reusable UI components
│   ├── navigation/            # Navigation setup and configurations
│   ├── screens/               # App screens and their components
│   │   ├── screenName.tsx     # Main component file for each screen
│   │   ├── model.ts           # Type definitions for API responses/data models
│   │   ├── style.ts           # Styles for the component
│   │   └── helper.ts          # Helper functions for the component
│   ├── redux/                 # Redux store, actions, and reducers
│   ├── services/              # Network and Socket services
│   ├── hooks/                 # Custom React hooks for shared logic
│   ├── i18n/                  # Internationalization setup and language files
│   ├── theme/                 # Theme-related files for consistent styling
│   ├── types/                 # TypeScript type definitions
│   └── utils/                 # Utility functions
├── App.tsx                    # Main entry point of the React Native app
├── index.js                   # Entry point for the React Native app, registers the app with AppRegistry
├── app.json                   # App configuration file
├── metro.config.js            # Metro bundler configuration
├── babel.config.js            # Babel configuration file
├── package.json               # Project dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── .gitignore                 # Git ignore file
```

## 🌟 Features

- **React Navigation:** Simplified and efficient navigation for a great user experience.
- **Redux:** State management using `redux`, `redux-persit`, `redux-saga` and `redux-toolkit`.
- **Axios:** Configured HTTP client for making API requests.
- **Formik & Yup:** Form handling with Formik for a simplified and efficient form development process, combined with Yup for schema validation.
- **i18next:** Internationalization for supporting multiple languages.
- **Keychain:** Securely manage and store sensitive information.
- **Socket.io:** Real-time communication for interactive features.
- **Appearance:** Automatically handle light and dark mode based on device appearance.
- **Internet Info:** Managing network connection.
- **React Native Config `.env`:** Manage different environments with multiple flavors & schema.

## 🚧 Upcoming Features

- **📸 Screenshot Prevention**
- **🔗 Deep Linking**
- **🔒 Code Obfuscation**
- **📱 Rooted/Jailbroken Device Detection**
- **🔐 SSL Pinning**
- **🚀 CodePush** for over-the-air updates

## 🧑‍💻 Authors

- [Uma Shankar](https://github.com/uma130012/RNBP)

## 🤝 Support

If you find this project helpful, please consider giving it a star on GitHub! ⭐

## 🗣 Feedback

We’d love to hear your feedback! Reach out to us at umashankarhajipur@gmail.com

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/uma-s-b8b256155)
