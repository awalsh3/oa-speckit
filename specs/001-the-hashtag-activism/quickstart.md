# Quickstart: Hashtag Activism App

## Prerequisites

- Node.js 18+
- Yarn or npm
- Ruby 3.x, Rails 7+
- PostgreSQL (optional for mock data)

## Setup

### 1. Clone the repository

```
git clone <repo-url>
cd <repo-root>
```

### 2. Install frontend dependencies

```
cd frontend
npm install
# or
yarn install
```

### 3. Install backend dependencies

```
cd ../backend
bundle install
```

### 4. Run the app (mock data)

- Start backend (Rails):

```
rails server
```

- Start frontend (Next.js):

```
cd ../frontend
npm run dev
```

### 5. Access the app

- Open http://localhost:3000 in your browser

## Notes

- Data is mocked for MVP; see `backend/src/models/` for schema
- To enable live feeds, update backend data sources
- For mobile, use browser or PWA install
