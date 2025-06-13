# User Management API

This project is a simple RESTful API for user management, built with Node.js, Express, and TypeORM. It supports user registration, authentication, and CRUD operations for users, including related entities such as address and company.

## Features
- User registration and authentication (JWT-based)
- CRUD operations for users
- Filtering users by active status
- Relational data: address, geo, company
- TypeScript support
- Dockerized for easy deployment

## Endpoints

### Auth
- `POST /auth/register` — Register a new user
- `POST /auth/login` — Login and get JWT token
- `GET /auth/me` — Get current authenticated user

### Users
- `GET /users` — Get all users (supports `?isActive=true|false` query)
- `GET /users/:id` — Get user by ID
- `POST /users` — Create a new user
- `PUT /users/:id` — Update user (including `isActive` field)
- `DELETE /users/:id` — Delete user

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- Docker & Docker Compose (optional, for containerized run)

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Copy `.env.example` to `.env` and set your values (or set them directly in your environment)

### Running Locally
```bash
npm run dev
```

### Running with Docker
```bash
docker-compose up --build
```

## Environment Variables
- `PORT` — Server port (default: 3000)
- `JWT_SECRET` — Secret key for JWT
- `JWT_EXPIRATION` — JWT token expiration (e.g., 24h)
- Database connection variables (see `docker-compose.yml` or `.env.example`)

## License
MIT 