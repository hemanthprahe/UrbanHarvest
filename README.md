# 🌿 Urban Harvest — Admin Dashboard

A responsive admin dashboard for a food delivery platform built with **React + Redux Toolkit**.

## Features

- **Login Page** — Email/password auth with remember me, form validation, demo credentials hint
- **Dashboard** — Stat cards (Orders, Revenue, Users, Pending), revenue area chart, recent orders table
- **Product Management** — Search, category filter, status filter, add product modal, delete product
- **Redux State Management** — Auth, Orders, and Products slices via Redux Toolkit
- **Responsive Design** — Mobile-friendly sidebar with overlay, adaptive grid layouts
- **Animations** — Fade-in transitions, hover effects, loading spinner

## Tech Stack

- React 18
- Redux Toolkit + React-Redux
- React Router v6
- Recharts (chart library)
- Lucide React (icons)
- Google Fonts: Syne + DM Sans

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/urban-harvest.git
cd urban-harvest

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

App runs at `http://localhost:3000`

### Demo Credentials
```
Email:    admin@urbanharvest.com
Password: admin123
```

## Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   ├── Login.jsx
│   │   └── Login.css
│   ├── Dashboard/
│   │   ├── Dashboard.jsx
│   │   └── Dashboard.css
│   ├── Products/
│   │   ├── Products.jsx
│   │   └── Products.css
│   ├── Layout/
│   │   ├── AppLayout.jsx / .css
│   │   ├── Sidebar.jsx / .css
│   │   └── Header.jsx / .css
│   └── Common/
│       ├── StatCard.jsx / .css
│       ├── StatusBadge.jsx / .css
│       └── ProtectedRoute.jsx
├── store/
│   ├── store.js
│   └── slices/
│       ├── authSlice.js
│       ├── ordersSlice.js
│       └── productsSlice.js
├── data/
│   └── mockData.js
├── styles/
│   └── global.css
└── App.js
```

## Redux State Shape

```js
{
  auth: { isAuthenticated, user, loading, error },
  orders: { items, stats },
  products: { items, searchQuery, selectedCategory, filterStatus }
}
```

## Build for Production

```bash
npm run build
```

Outputs to `/build` folder — ready to deploy on Vercel/Netlify.

## Deployment (Vercel)

```bash
npm install -g vercel
vercel
```
