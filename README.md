# YouthMobile - React Native Application

A feature-rich React Native mobile application with multi-language support, authentication, and comprehensive navigation system.

## 📱 Features

- **Multi-language Support**: English and Khmer (កម្ពុជា) localization
- **Authentication System**: User-based and key-based authentication
- **Navigation**: Stack and bottom tab navigation with Material Design
- **Database**: Local data storage with Realm database
- **Secure Storage**: Encrypted storage for sensitive data
- **Error Monitoring**: Integrated Sentry error tracking
- **Modern UI**: Material Design components with theming
- **API Integration**: RESTful API communication with Axios

## 🏗️ Project Structure

```
├── App.js                      # Main application entry point
├── index.js                    # React Native entry point
├── app/
│   ├── api/                    # API layer and authentication
│   │   ├── baseApi.js
│   │   ├── userBasedAuth.js
│   │   ├── keyBasedAuth.js
│   │   └── sessionApi.js
│   ├── assets/                 # Images and stylesheets
│   ├── components/             # Reusable UI components
│   │   ├── introductions/
│   │   └── shared/
│   ├── config/
│   │   └── environment.js      # Environment configuration
│   ├── constants/              # Application constants
│   ├── db/
│   │   └── schema.js          # Realm database schema
│   ├── hooks/                  # Custom React hooks
│   ├── http/                   # HTTP request utilities
│   ├── localizations/         # i18n translations
│   │   ├── en.json
│   │   ├── km.json
│   │   └── i18next.js
│   ├── navigators/            # Navigation configuration
│   │   ├── app_navigator.js
│   │   ├── bottom_tab_navigator.js
│   │   └── settings_stack_navigator.js
│   ├── services/              # Business logic services
│   ├── themes/
│   │   └── color.js           # Application color scheme
│   ├── utils/                 # Utility functions
│   └── views/                 # Screen components
│       ├── home/
│       ├── videos/
│       ├── settings/
│       ├── sign_ins/
│       ├── introductions/
│       └── main/
├── android/                   # Android-specific files
├── ios/                      # iOS-specific files
└── __tests__/               # Test files
```

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

### System Requirements
- **Node.js**: >= 14.x
- **npm**: >= 6.x or **Yarn**: >= 1.x
- **React Native CLI**: `npm install -g react-native-cli`
- **Watchman**: (macOS users) `brew install watchman`

### For Android Development
- **Android Studio**: Latest version
- **Android SDK**: API level 30 or higher
- **Java Development Kit (JDK)**: JDK 11
- **Android device** or **Android Emulator**

### For iOS Development (macOS only)
- **Xcode**: Latest version (12.5+)
- **iOS Simulator** or **Physical iOS device**
- **CocoaPods**: `sudo gem install cocoapods`

### Additional Dependencies
- **CMake**: Required for Realm database
  - **macOS**: `brew install cmake`
  - **Windows**: Download from [CMake website](https://cmake.org/download/)
  - **Linux**: `sudo apt-get install cmake`

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/kakada/react_native_baseline.git
cd react_native_baseline
```

### 2. Install Dependencies
```bash
# Install Node.js dependencies
npm install

# For iOS, install CocoaPods dependencies
cd ios && pod install && cd ..
```

### 3. Configure Environment
Edit `app/config/environment.js` to match your development setup:

```javascript
export const environment = {
  domain: 'http://YOUR_API_DOMAIN:PORT',
  type: 'development',
  showIntroSlider: true,
  defaultLanguage: 'km', // or 'en'
  sentryDSN: 'YOUR_SENTRY_DSN',
  encryptionKey: 'YOUR_256_BYTE_ENCRYPTION_KEY',
  apiKey: 'YOUR_API_KEY',
  isUserBasedAuth: true,
  apiVersion: 'v1'
};
```

## 📱 Running the Application

### Start Metro Bundler
```bash
npm start
# or
npx react-native start
```

### Run on Android
```bash
# Run on Android device/emulator
npm run android
# or
npx react-native run-android
```

### Run on iOS
```bash
# Run on iOS simulator/device
npm run ios
# or
npx react-native run-ios
```

### Development Scripts
```bash
# Start the Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS  
npm run ios

# Run tests
npm test

# Lint code
npm run lint
```

## 🔧 Development Guidelines

### Code Style
- Follow ESLint configuration (`.eslintrc.js`)
- Use Prettier for code formatting (`.prettierrc.js`)
- Follow React Native best practices

### Testing
```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch
```

### Debugging
- Use **Flipper** for debugging (included in React Native 0.69.3)
- Use **React Native Debugger** for advanced debugging
- **Sentry** integration for production error monitoring

### Internationalization
- Add translations in `app/localizations/en.json` and `app/localizations/km.json`
- Use `useTranslation` hook from `react-i18next` in components
- Change language with `useChangeAppLanguage` custom hook

Example:
```javascript
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <Text>{t('hello')}</Text>
  );
};
```

## 🔐 Authentication

The app supports two authentication methods:

1. **User-based Authentication**: Username/password login
2. **Key-based Authentication**: API key authentication

Configure in `app/config/environment.js`:
```javascript
isUserBasedAuth: true // or false for key-based auth
```

## 💾 Database

The app uses **Realm** for local data storage. Database schema is defined in `app/db/schema.js`.

## 🎨 Theming

Customize app appearance in `app/themes/color.js`:
```javascript
export default {
  primaryColor: '#YOUR_PRIMARY_COLOR',
  whiteColor: '#FFFFFF',
  mutedColor: '#YOUR_MUTED_COLOR'
};
```

## 🚨 Troubleshooting

### Common Issues

#### 1. Metro bundler issues
```bash
# Clear Metro cache
npx react-native start --reset-cache
```

#### 2. Android build issues
```bash
# Clean Android build
cd android && ./gradlew clean && cd ..
```

#### 3. iOS build issues
```bash
# Clean iOS build and reinstall pods
cd ios && rm -rf Pods && pod install && cd ..
```

#### 4. Realm installation issues
Ensure CMake is installed:
```bash
# macOS
brew install cmake

# Ubuntu/Debian
sudo apt-get install cmake

# Windows
# Download and install from https://cmake.org/download/
```

#### 5. Node modules issues
```bash
# Delete node_modules and reinstall
rm -rf node_modules && npm install
```

#### 6. iOS simulator not found
```bash
# List available simulators
xcrun simctl list devices

# Run on specific simulator
npx react-native run-ios --simulator="iPhone 14"
```

### Build Errors

#### Android
- Ensure Android SDK is properly configured
- Check `ANDROID_HOME` environment variable
- Verify Java version (JDK 11 recommended)

#### iOS
- Ensure Xcode is up to date
- Check iOS deployment target in Xcode
- Verify provisioning profiles for device builds

## 📚 Additional Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation](https://reactnavigation.org/)
- [Realm Database](https://realm.io/docs/javascript/)
- [React i18next](https://react.i18next.com/)
- [Sentry React Native](https://docs.sentry.io/platforms/react-native/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Happy Coding! 🚀**