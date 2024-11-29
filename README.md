# Paystack Product Purchase App

## Overview
This is a React Native Expo application that allows users to browse and purchase products using Paystack payment integration.

## Features
- Product listing screen
- Individual product payment flow
- Paystack payment integration
- Splash screen support
- Navigation between screens

## Prerequisites
- Node.js (v14 or later)
- Expo CLI
- Paystack Account

## Installation

### 1. Clone the Repository
```bash
git clone https://your-repository-url.git
cd your-project-directory
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Install Expo CLI (if not already installed)
```bash
npm install -g expo-cli
```

### 4. Paystack Configuration
1. Sign up for a Paystack account at [Paystack.com](https://paystack.com)
2. Obtain your Paystack Public Key
3. Replace `YOUR_PAYSTACK_PUBLIC_KEY` in the following files:
   - `App.js`
   - `screens/PaymentScreen.js`

### 5. Prepare Assets
- Product images:
  - `headphones.jpg`
  - `smartwatch.jpg`
  - `speaker.jpg`

### 6. Run the Application
```bash
expo start
# or
npm start
```

## Project Structure
```
├── App.js                  # Main application component
├── app.json                # Expo configuration
├── assets/                 # Image and icon assets
│   ├── splash.png
│   ├── icon.png
│   └── ...
├── screens/
│   ├── ProductListScreen.js
│   └── PaymentScreen.js
└── package.json
```

## Dependencies
- React Native
- Expo
- React Navigation
- React Native Paystack WebView
- Expo Splash Screen

## Payment Flow
1. Browse products on the Product List screen
2. Select "Pay Now" for a specific product
3. Redirected to Payment screen
4. Complete payment via Paystack WebView
5. Receive success or cancel notification

## Customization
- Modify `PRODUCTS` array in `ProductListScreen.js` to add/edit products
- Adjust styles in the respective screen files
- Customize splash screen in `App.js`

## Troubleshooting
- Ensure all dependencies are installed
- Check Paystack key is correctly configured
- Verify asset files are present and correctly named

## Security Considerations
- Never commit your Paystack public key to version control
- Use environment variables or configuration management

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
[Your License Here - e.g., MIT]

## Contact
[Your Contact Information]