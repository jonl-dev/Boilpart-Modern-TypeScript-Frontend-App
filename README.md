
# **Boilpart – Modern TypeScript Frontend App**

![TypeScript](https://img.shields.io/badge/TypeScript-4.0%2B-blue)
![React](https://img.shields.io/badge/React-18.x-blue)
![Redux Toolkit](https://img.shields.io/badge/Redux--Toolkit-Global%20State-purple)
![Vite](https://img.shields.io/badge/Vite-Lightning%20Fast-yellow)
![ESLint](https://img.shields.io/badge/ESLint-Code%20Style-purple)
![Prettier](https://img.shields.io/badge/Prettier-Formatter-lightblue)
![Jest](https://img.shields.io/badge/Jest-Testing-red)
![Docker](https://img.shields.io/badge/Docker-Ready-blue)

---

## **Overview**

**Boilpart** is a modern frontend boilerplate built with **React 19**, **Vite**, and **TypeScript**. It supports scalable state management using **Redux Toolkit**, follows modular architecture, and is optimized for DX (Developer Experience) and performance.

---

## **Features**

- **Vite** for blazing-fast development and build.
- **React 19** with functional components and hooks.
- **Redux Toolkit** for global state management.
- **TypeScript** for static type safety.
- **Custom hooks** for reusable logic.
- **ESLint + Prettier** for code quality and formatting.
- **Jest + React Testing Library** for unit testing.
- **Docker-ready** for consistent environment.

---

## **Project Structure**

```
boilpart-app/
├── public/                  # Static assets
├── src/
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Entry point
│   ├── assets/              # Images, fonts, etc.
│   ├── components/          # Shared UI components
│   ├── constants/           # Constant values & enums
│   ├── features/            # Redux slices (modular state)
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # App pages/routes
│   ├── store/               # Redux store setup
│   ├── styles.css           # Global styles
│   ├── types/               # Global TypeScript types
│   └── utils/               # Reusable utilities/helpers
├── .eslintrc.cjs            # ESLint config
├── .prettierrc              # Prettier config
├── Dockerfile               # Docker image setup
├── docker-compose.yml       # Dev environment stack (optional)
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
├── package.json             # NPM dependencies & scripts
├── README.md                # Project documentation
└── LICENSE                  # License
```

---

## **Getting Started**

### **Install Dependencies**

```bash
npm install
# or
yarn install
```

### **Run Development Server**

```bash
npm run dev
```

Visit `http://localhost:5173` to view the app.

---

## **Build for Production**

```bash
npm run build
```

---

## **Run Tests**

```bash
npm run test
```

Unit tests are handled using **Jest** and **React Testing Library**.

---

## **Lint & Format**

```bash
npm run lint     # Check linting errors
npm run format   # Auto-format using Prettier
```

---

## **Docker Usage**

### Build Docker Image

```bash
docker build -t boilpart-app .
```

### Run Container

```bash
docker run -p 5173:5173 boilpart-app
```

---

## **License**

This project is licensed under the **MIT License**. See `LICENSE` file for more details.

---

## **Contributing**

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.


