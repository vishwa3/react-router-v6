import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import "./posts.css"

export default function Posts() {
  const data = useLoaderData();
  return (
    <div className="container">
    <h1>Posts below - Click to see post details</h1>
      {data.map((item) => {
        return (
          <p key={item.id}>
            <Link to={`/posts/${item.id}`}>
              {item.title}
            </Link>
          </p>
        );
      })}
    </div>
  );
}
