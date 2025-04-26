import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Setting a theme attribute to the document element to enable dark mode toggling
// Initially set to light mode
document.documentElement.setAttribute("data-theme", "light");

createRoot(document.getElementById("root")!).render(<App />);
