# Angular Task - Reusable DataTable with CRUD 

This project is a reusable, dynamic DataTable component built with **Angular 20**, **PrimeNG**, and **Formly**, supporting full **CRUD operations**, **in-place editing**, **dialog form creation**, and **loading states**. The data is managed using a mock REST API powered by **JSON Server**.

---

## 📁 Project Structure

- `AppComponent` handles:
  - Product list
  - Data operations (fetch, create, update, delete)
  - Success/error toasts

- `DataTableComponent` (reusable)
  - Accepts dynamic columns and data
  - Supports inline editing
  - Allows custom templates
  - Uses Formly forms in dialogs
  - Global search
  - Sorting

---

## ⚙️ Technologies Used

- Angular 20
- PrimeNG 20
- JSON Server
- Formly + Formly PrimeNG
- Tailwind CSS (optional styling)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rawannmmohamed/angularTask.git
cd angularTask
```

## 2. Install Dependencies

```bash
npm install 
```

## 3. Setup Mock API with JSON Server

This project uses [JSON Server](https://github.com/typicode/json-server) to simulate a RESTful backend for product data.


## 4. Run the Application
   Step 1: Start the mock API (JSON Server)
  ```bash
npm run start:api
```
   Step 2: Start the Angular development server
  In a new terminal, run:

```bash
ng serve
