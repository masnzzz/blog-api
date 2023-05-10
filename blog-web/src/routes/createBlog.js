import { Link } from "react-router-dom";

const CreateBlog = () => {
  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      <h1>ブログ作成画面</h1>
      <div>
        <Link to="/">TOP</Link>
      </div>
      <div>
        <Link to="/blogs">記事一覧画面</Link>
      </div>
    </div>
  )
}

export default CreateBlog;
