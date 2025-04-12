# 📊 Data Query Dashboard

A responsive and efficient dashboard built with **React**, **TailwindCSS**, and **Redux Toolkit**. It allows users to input custom queries, view results, and track query history in a clean UI.

---

## 🚀 Features

- 🔍 **Query Input** – Enter SQL-like or API querie
- 📜 **Query History** – Tracks recent queries
- 📊 **Query Results** – Display returned data in a user-friendly format
- 🎨 **Responsive UI** – Styled using TailwindCSS
- ⚙️ **State Management** – Global state handled by Redux Toolkit

---

## 🛠️ Tech Stack

- **React** – Component-based frontend
- **TailwindCSS** – Utility-first styling
- **Redux Toolkit** – Scalable global state management
- **Vite** – Lightning-fast frontend tooling

---

## 📁 Folder Structure

DATA-QUERY-DASHBOARD/ ├── public/ # Static assets ├── src/ │ ├── assets/ # Images, icons, etc. │ ├── components/ # Reusable UI components │ │ ├── QueryHistory.jsx │ │ ├── QueryInput.jsx │ │ ├── QueryResult.jsx │ │ └── Sidebar.jsx │ ├── redux/ # Redux logic (store and slices) │ │ ├── querySlice.js │ │ └── store.js │ ├── App.jsx # Main app component │ ├── App.css │ ├── index.css │ └── main.jsx # React root + provider setup ├── .gitignore ├── index.html ├── package.json ├── vite.config.js ├── eslint.config.js └── README.md
