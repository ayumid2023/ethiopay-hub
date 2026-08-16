# EthioPay Hub

A unified financial super-app for Ethiopia, consolidating mobile money, banking, government payments, and microfinance services into a single accessible platform.

## Features

- 🔐 Unified registration with phone number and national ID
- 💰 Multi-provider wallet aggregation (TeleBirr, CBE Birr, M-PESA, banks)
- 📱 Person-to-person transfers to any Ethiopian phone number
- 🏦 Utility bill payments (electricity, water, internet, DSTV)
- 📡 Airtime & data purchase for all telecom providers
- 📋 USSD access for feature phone users (*123#)
- 🗣️ Voice-first interface for low-literacy users
- 🌍 Multi-language support (Amharic, Afaan Oromo, Tigrinya, Somali, English)
- 📴 Offline transaction queuing

## Tech Stack

- **Mobile**: React Native (Expo) + TypeScript
- **State Management**: Redux Toolkit
- **Navigation**: React Navigation
- **API Client**: Axios
- **Backend**: Node.js + Express + PostgreSQL (coming soon)
- **CI/CD**: GitHub Actions
- **Testing**: Jest + React Native Testing Library

## Getting Started

### Prerequisites

- Node.js v20.19.2 or later
- Yarn package manager
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ethiopay-hub.git
cd ethiopay-hub

# Install dependencies
cd mobile
yarn install

# Copy environment variables
cp .env.example .env

# Start the development server
yarn start
