import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import ShowTasks from "./components/ShowTasks/ShowTasks.jsx";
import AddTask from "./components/AddTask/AddTask.jsx";
import UpdateTask from "./components/UpdateTask/UpdateTask.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <ShowTasks />,
      },
      {
        path: "add-task",
        element: <AddTask />,
      },
      {
        path: "update-task/:id",
        element: <UpdateTask />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <div className="bg-[#eef1f8]">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
