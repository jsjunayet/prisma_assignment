
# Assignment 07 – Backend API Server

A Node.js + TypeScript backend application using Express and Prisma ORM to manage structured API services. This project is designed for educational purposes and backend development practice.

---

## 🔗 Live Backend

> Hosted on: [https://assignment-07-opal.vercel.app](https://assignment-07-opal.vercel.app)

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL** 
- **Date-fns**
- **ts-node-dev** (for development)

---

## ⚙️ Setup Guide

### 1. Clone the Repository

```bash
git clone https://github.com/jsjunayet/prisma_assignment.git
cd assignment-07
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root and add your database URL:

```
DATABASE_URL="your_postgresql_database_url"
```

### 4. Prisma Setup

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Run in Development Mode

```bash
npm run dev
```

### 6. Build for Production

```bash
npm run build
```

### 7. Start the Production Server

```bash
npm start
```

---

## ✨ Key Features

- 🔐 RESTful API built with Express and TypeScript.
- 🧩 Prisma ORM integration for type-safe database queries.
- 🗓 Built-in date utilities using `date-fns`.
- 🚀 Easy deployment ready for  supabase.
- 🔄 Organized code structure using `src/` and `dist/`.
- 💻 Full TypeScript support with clean build scripts.
- 🔁 Live reload with `ts-node-dev` for better dev experience.

---

