# Context Glow

Context Glow is a React application that demonstrates global theme switching (light/dark mode) using the React Context API. The app features a card component and a theme toggle button, providing a dynamic and consistent user interface experience. Built with Vite for fast development and hot module replacement.

## Features

- **Global Theme Management:** Uses React Context API to manage and provide theme state across the app.
- **Light & Dark Modes:** Easily toggle between light and dark themes.
- **Themed Components:** Card and button components adapt to the current theme.
- **Responsive Design:** Mobile-friendly and visually appealing layout.
- **Vite Powered:** Fast development, instant hot reloads, and optimized build.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/context-glow.git
   cd context-glow
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) to view the app.

## Project Structure

```
context-glow/
├── public/
│   └── ...                # Static assets
├── src/
│   ├── components/
│   │   ├── Card.jsx       # Themed card component
│   │   └── ThemeBtn.jsx   # Theme toggle button
│   ├── contexts/
│   │   └── Theme.jsx      # Theme context and provider
│   ├── App.jsx            # Main app logic
│   ├── App.css            # Global styles
│   └── main.jsx           # Entry point
├── package.json
├── vite.config.js
└── README.md
```

## How It Works

- **Theme Context:**  
  The `ThemeProvider` in `src/contexts/Theme.jsx` manages the theme state (`light` or `dark`) and provides functions to toggle the theme.
- **Theme Application:**  
  The current theme is applied globally by adding a class to the `<html>` element, allowing CSS to style the app accordingly.
- **Theme Toggle:**  
  The `ThemeBtn` component allows users to switch between light and dark modes.
- **Themed Card:**  
  The `Card` component adapts its appearance based on the current theme.

## Customization

- **Add More Themes:**  
  Extend the context and CSS to support additional themes.
- **Style Components:**  
  Update `App.css` or add new styles for custom themes and components.

## Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run preview` – Preview the production build

## License

This project is licensed under the MIT License.

---

