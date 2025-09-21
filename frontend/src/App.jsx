import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browser from "./components/Browser";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";

import Companies from "./components/admins/Companies";
import CompanyCreate from "./components/admins/CompanyCreate";
import CompanySetup from "./components/admins/CompanySetup";
import JobAdmin from "./components/admins/Jobs";
import PostJob from "./components/admins/PostJob";
import Applicants from "./components/admins/Applicants";
import ProtectedRoute from "./components/admins/ProtectedRoute";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/browser",
    element: <Browser />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },

  // admins starts form here
  {
    path: "/admin/companies",
    element: (
      <ProtectedRoute>
        <Companies />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/create",
    element: <CompanyCreate />,
  },
  {
    path: "/admin/companies/:id",
    element: <CompanySetup />,
  },
  {
    path: "/admin/jobs",
    element: <JobAdmin />,
  },
  {
    path: "/admin/jobs/create",
    element: <PostJob />,
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: <Applicants />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
