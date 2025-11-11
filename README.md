# Developer Directory App

A full-stack application for managing developer profiles with role-based filtering and tech stack search capabilities.

## Features
- Add developer details (Name, Role, Tech Stack, Experience)
- Display list of developers in a clean, responsive UI
- Filter by role (Frontend, Backend, Full-Stack) and search by tech stack
- Basic form validation and error handling
- Toast notifications for success/error messages
- Responsive design with Tailwind CSS

## Tech Stack
- **Frontend**: React (functional components + hooks), Vite, Tailwind CSS, React Toastify, Axios
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), CORS
- **Deployment**: Frontend on Vercel, Backend on Render

## API Endpoints
- `POST /api/developers` - Add a new developer
- `GET /api/developers` - Get all developers (with optional query params for filtering)

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/BenjaminAJ/Developer-Directory-App.git
cd developer-directory-app
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/developer-directory
# Or use MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/developer-directory
```

Start the backend server:
```bash
npm start
# For development: npm run dev (uses nodemon)
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

### 4. Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## Deployment

### Backend (Render)
- Build Command: `npm install`
- Start Command: `npm start`
- Root Directory: `backend`

### Frontend (Vercel)
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`
- Root Directory: `frontend`

## Project Structure
```
developer-directory-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── package.json
└── README.md
```

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License
This project is licensed under the ISC License.
