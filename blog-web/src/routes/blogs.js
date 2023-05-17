import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axios.js";

const Blogs = () => {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    const f = async () => {
      const response = await axiosInstance.get("/blogs");
      setBlogs(response.data);
    };
    f();
  }, []);

  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      <h1>ブログ一覧画面</h1>
      <div>
        <Link to="/">TOP</Link>
      </div>
      <div>
        <Link to="/create">記事作成画面</Link>
      </div>

      <div>
        <ul>
          {blogs?.map((blog) => (
            <Link to={`/blogs/${blog.id}`} key={blog.id}>
              <li>{blog.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Blogs;
