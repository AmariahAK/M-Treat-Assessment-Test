Patient Registration and Authentication System
A modern full-stack healthcare application built with React, Redux, Django, and SQLite. This system provides secure patient registration, authentication, and profile management capabilities.

Features
Patient Registration
Secure registration form with comprehensive validation
Email, username, and phone number collection
Password security with confirmation
Data persistence in SQLite via Django REST API
Authentication
Token-based authentication system
Secure state management with Redux
Protected routes and API endpoints
Patient Dashboard
Real-time profile information display
Profile updates (username and phone number)
Secure logout functionality
Tech Stack
Frontend
React
Redux for state management
React Router for navigation
TailwindCSS for styling
Backend
Django REST Framework
SQLite Database
JWT Authentication
Getting Started
Prerequisites
Node.js >= 14.x
Python >= 3.8
npm or yarn
Installation
Clone the repository
git clone https://github.com/yourusername/patient-registration-system.git

Copy

Execute

Backend Setup
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

Copy

Execute

Frontend Setup
cd frontend
npm install
npm start

Copy

Execute

Usage
Register a new account at /register
Login with your credentials at /login
Access your dashboard at /dashboard
Update your profile information as needed
API Endpoints
POST /api/register/ - User registration
POST /api/login/ - User authentication
GET /api/profile/ - Fetch user profile
PUT /api/profile/ - Update user profile
Contributing
Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
License
This project is licensed under the MIT License - see the LICENSE file for details

Contact
Your Name - @AmariahAK Project Link: https://github.com/AmariahAK/patient-registration-system



