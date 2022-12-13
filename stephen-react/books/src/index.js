import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/books";

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(
  <Provider>
    <App />
  </Provider>
);
