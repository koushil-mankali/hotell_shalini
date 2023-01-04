import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// importing routes from routes/index.js file.
import router from "./routes";

// We are adding routes to main rendering instead of <App /> element.
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
