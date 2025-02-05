# Next.js Authentication System

A simple authentication system built with Next.js, featuring user sign-in, sign-up, email verification, and a profile page.

## Features
- User Registration (Sign Up)
- User Login (Sign In)
- Email Verification using Nodemailer
- Secure Authentication with JSON Web Tokens (JWT)
- Password Hashing with bcryptjs
- Profile Page with User Details

## Tech Stack
- **Next.js** (15.1.3) - React Framework
- **React** (19.0.0) - Frontend Library
- **React-DOM** (19.0.0) - Rendering Library
- **Axios** (1.7.9) - API Requests
- **Mongoose** (8.9.2) - MongoDB ODM
- **bcryptjs** (2.4.3) - Password Hashing
- **jsonwebtoken** (9.0.2) - Authentication Tokens
- **Nodemailer** (6.9.16) - Email Verification
- **react-hot-toast** (2.4.1) - Notifications

## Installation

### Prerequisites
- Node.js installed
- MongoDB database setup

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/jpayansh/basic-auth-nextjs.git
   cd nextjs-auth
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the development server:
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## Usage
1. Sign up with your email and password.
2. Check your email for the verification link.
3. Click the link to verify your email.
4. Sign in and access your profile.

## License
This project is licensed under the MIT License.

