# StrokeE Admin App

A Next.js-based web application designed for system administrators to manage the entire StrokeE emergency response system. This app provides comprehensive administrative control over users, healthcare facilities, ambulances, and emergency monitoring. It serves as the central management hub for the StrokeE platform, enabling administrators to oversee system operations and maintain system integrity.

## 🚨 Features

### Core Functionality

- **System-wide Emergency Monitoring**: Comprehensive view of all emergency responses across the platform
- **User Management System**: Create, edit, and manage all user accounts and roles
- **Healthcare Facility Management**: Add, remove, and manage health centers and clinics
- **Ambulance Fleet Management**: Add, remove and manage ambulances

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **State Management**: React Context API
- **Testing**: Jest with React Testing Library
- **Package Manager**: npm/yarn/pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Firebase project setup
- Access to StrokeE backend services

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd strokee/admin-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory with your configuration:

   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_BACKEND_URL=your_backend_url
   NEXT_PUBLIC_NOTIFICATION_BACKEND_URL=your_backend_url
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Testing

Run the test suite using the following commands:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🏗️ Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📋 Key Features Explained

### System-wide Emergency Monitoring

- Administrators can view all emergency responses across the platform

### User Management System

- Create and manage user accounts for all roles (patients, paramedics, operators, clinic staff)
- Edit user information and manage account status

### Healthcare Facility Management

- Add new health centers and clinics to the system
- Remove healthcare facilities

## 🔒 Security Features

- Firebase Authentication for secure user management
- Role-based access control for administrative functions
- Secure API endpoints with authentication
- Encrypted communication for sensitive administrative data

## 📱 Professional Interface

- Web-optimized interface for desktop and tablet use
- Responsive layout for various screen sizes
- Intuitive navigation
