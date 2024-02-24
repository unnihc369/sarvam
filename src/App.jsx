import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import Login from './components/login/Login';
import About from './components/about/About';
import Farm from './components/farm/Farm';
import Hotel from './components/hotel/Hotel';
import AdminPage from './components/admin/Admin';
import PostPage from './components/post/Post';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/farm",
      element: <Farm/>,
    },
    {
      path: "/hotel",
      element: <Hotel/>,
    },
    {
      path: "/admin",
      element: <AdminPage />,
    },
    {
      path: "/posts",
      element: <PostPage />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
