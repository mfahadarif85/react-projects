import ReactDOM from "react-dom/client";
import "./index.css";
import { NavigationProvider } from "./context/navigation";
import App from "./App";

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
