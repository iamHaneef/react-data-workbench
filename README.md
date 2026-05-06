# React Data Workbench

## 📌 Overview

A structured React-based UI implementation focused on building data-driven interfaces with clear separation between UI components and data sources.

This repository currently includes authentication forms and data visualization components using both mock data and real API integration.

---

## ⚙️ Current Implementation

### 🔐 Authentication

* User Login Form
* User Registration Form
* Form validation using Formik

### 📊 Data Display

* Data Table (Ant Design)
* Bar Chart
* Pie Chart
* Donut Chart

### 🔄 Data Handling

* Mock data integration for development
* API-based data fetching and transformation
* Switchable data source (mock ↔ API)

---

## 🛠️ Tech Stack

* React.js
* Vite
* Formik
* Ant Design
* @antv/g2 (Charts)

---

## 📂 Structure

```bash
src/
├── core/
│   ├── api/
│   │   ├── chartApi.js
│   │   └── userApi.js
│   └── mock/
│       ├── chartMock.js
│       └── userMock.js
│
├── modules/
│   ├── auth/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   │
│   └── data-display/
│       ├── Table.jsx
│       ├── BarChart.jsx
│       ├── PieChart.jsx
│       ├── DonutChart.jsx
│       └── LineChart.jsx
│       └── GaugeChart.jsx
│
├── App.jsx
├── main.jsx
```

---

## 🚀 Running the Project

```bash
npm install
npm run dev
```
