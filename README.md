# EduSure - React Frontend

## Overview
EduSure is a React-based frontend application for an e-learning platform. It features a homepage with a hero section, a global navigation bar, and multi-page routing using React Router. check `01JNPZC39ZEYQEYJH61B1PDQ8M.pdf` of requirements.
and check `minimal-documention.txt` for minimal doc explaining route setup.

---
## Live Demo

To see it live [click here](https://samahali.github.io/edu-sure/)

---

## Features
- **React Router Integration**: Enables seamless navigation between pages.
- **Hero Section**: A visually appealing banner with a call-to-action.
- **Navigation Bar**: Provides links to major sections of the site.
- **Responsive Design**: Ensures a smooth user experience on different devices.

## Tech Stack
- **React (v19)** (with Vite + yarn)
- **React Router** (for navigation)
- **CSS / Tailwind CSS** (for styling)
- **Node.js (v22.14.0)** (for development environment)

## Installation
To set up and run the project locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/samahali/edu-sure.git
   cd edu-sure
   ```

2. Install dependencies:
   ```sh
   yarn install
   ```

3. Start the development server:
   ```sh
   yarn dev
   ```

## Project Structure
```
edu-sure/
│── src/
│   ├── components/
│   │   ├── NavBar.jsx
|   |   |__ HeroSection.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   ├── Admin.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── eslint.config.js
│   ├── tailwind.config.js
│   ├── index.html
│── public/
│── package.json
|── yarn.lock
│── README.md
```

## Routing Setup
The project uses `react-router-dom` for client-side navigation. Routes are defined in `App.js`:

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/edu-sure/" element={<Home />} />
        <Route path="/edu-sure/courses" element={<Courses />} />
        <Route path="/edu-sure/cart" element={<Cart />} />
        <Route path="/edu-sure/login" element={<Login />} />
        <Route path="/edu-sure/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
```

## Navigation Bar
The `<NavBar>` component contains navigation links for easy access to different pages.

```jsx
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/edu-sure/">Home</Link></li>
        <li><Link to="/edu-sure/courses">Courses</Link></li>
        <li><Link to="/edu-sure/cart">Cart</Link></li>
        <li><Link to="/edu-sure/login">Login</Link></li>
        <li><Link to="/edu-sure/admin">Admin</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
```

## Deployment
To deploy the project, build the production version:
```sh
yarn build
```
Then, host the `dist/` (Vite) or `build/` (CRA) folder on any static hosting provider such as Vercel, Netlify, or GitHub Pages.


Happy coding! 🚀

