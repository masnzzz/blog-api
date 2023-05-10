import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      <h1>ブログ詳細画面</h1>
      <div>
        <Link to="/">TOP</Link>
      </div>
      <div>
        <Link to="/create">記事作成画面</Link>
      </div>
      <div>
        <Link to="/blogs">記事一覧画面</Link>
      </div>
    </div>
  )
}

export default Blog;
