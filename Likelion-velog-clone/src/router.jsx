// Router.jsx

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // 메인페이지
      { path: "/", 
        element: <HomePage /> },
    ],
  },
]);

export default router;
