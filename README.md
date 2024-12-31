# Patient Registration and Authentication System

This is a full-stack application developed to handle patient registration, authentication, and data management. Built with React, Redux, Django, and SQLite, the application demonstrates the seamless integration of frontend and backend technologies.

## Features

1. **Patient Registration**:
   - Secure registration form with validation on both frontend and backend.
   - Data is stored in an SQLite database via a Django REST API.

2. **User Authentication**:
   - Token-based login system.
   - Securely manages authentication using Redux for state.

3. **Patient Dashboard**:
   - Displays patient information upon login.
   - Allows updates to certain fields (excluding email).

## Technologies Used

- **Frontend**: React, Redux
- **Backend**: Django (REST Framework)
- **Database**: SQLite
- **State Management**: Redux
- **Authentication**: Django Authentication Framework

## Setup Instructions

### Prerequisites

- Python (>=3.8)
- Node.js (>=14.x)

### Installation

1. **Backend Setup**:
   - Clone the repository: `git clone <repo_url>`
   - Navigate to the backend directory: `cd backend`
   - Create a virtual environment: `python -m venv venv`
   - Activate the environment:
     - Windows: `venv\Scripts\activate`
     - macOS/Linux: `source venv/bin/activate`
   - Install dependencies: `pip install -r requirements.txt`
   - Apply migrations:`python manage.py makemigrations`,then run, `python manage.py migrate`
   - Start the Django server: `python manage.py runserver`

2. **Frontend Setup**:
   - Navigate to the frontend directory: `cd frontend`
   - Install dependencies: `npm install`
   - Start the development server: `npm start`

3. **Integration**:
   - Ensure the React app is served via Django when the Django server is live.

### Configuration

- The project uses SQLite as the database, which requires no additional setup for small projects. Ensure the database file is correctly configured in the `settings.py` file of the Django project.

### Usage

1. Register a new patient through the registration form.
2. Login with valid credentials to access the dashboard.
3. View and update patient information (except email).

## Demo

https://www.loom.com/share/e04fc508035641728d527c6d0c9c8f1a?sid=6ece3691-a961-4878-a16e-3000e5bc63b3

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.


