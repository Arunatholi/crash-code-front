import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import SignupForm from "./SignupForm.jsx";
import AddPost from "./AddPost.jsx";
import PhotoDesplay from "./PhotoDesplay.jsx";
import LoginForm from "./LoginForm.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/signup",
        element: <SignupForm />,
      },
      {
        path: "/new",
        
        element:(
          <PrivateRoute>
            <AddPost/>
          </PrivateRoute>
        ) 
      },
      {
        path: "/photo",
        element: <PhotoDesplay/>,
      },
      {
        path: "/login",
        element: <LoginForm/>,
      }
      
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
