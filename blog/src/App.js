import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/country")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Countries</h1>
        {blogs &&
          blogs?.map((blog) => (
            <div key={blog.id} style={{ color: "white" }}>
              {blog.country}
            </div>
          ))}
      </header>
    </div>
  );
}

export default App;
