import RegistrationPage from "../pages/RegistrationPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegistrationPage />,
  },
]);

const AppRouter = () => {
  return (
      <RouterProvider router={router} />
);
};

export default AppRouter;
