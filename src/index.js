import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts from "./Posts";
import PostDetails from "./PostDetails";

// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/posts

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Response("Failed to fetch data", { status: 404 });
  }
  return await response.json();
}

async function fetchPostDetails({ params }) {
  const { id } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) {
    throw new Response("Failed to fetch user data", { status: 404 });
  }
  return response.json();
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/posts",
    element: <Posts />,
    loader: fetchPosts,
  },
  {
    path: "/posts/:id",
    element: <PostDetails />,
    loader: fetchPostDetails,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
