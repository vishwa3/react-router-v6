import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/posts");
  }, [navigate]);
  return (
    <div>
      <h1>Redirecting you ...</h1>
    </div>
  );
}
