import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      <h1>ブログ一覧画面</h1>
      <div>
        <Link to="/">TOP</Link>
      </div>
      <div>
        <Link to="/create">記事作成画面</Link>
      </div>
    </div>
  )
}

export default Blogs;
