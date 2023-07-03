import { createBrowserRouter } from "react-router-dom";
import { Home } from "./routes.lazyload";
import { ErrorBoundary } from "@/components";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    children: [{ element: <Home />, index: true }],
    hasErrorBoundary: true,
    errorElement: <ErrorBoundary />,
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
