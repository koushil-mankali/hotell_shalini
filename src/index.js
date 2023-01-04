import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./App.css";

import router from "./routes";

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
