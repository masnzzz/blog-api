import { Link } from "react-router-dom";
import { useState } from "react";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      <h1>ブログ作成画面</h1>
      <div>
        <Link to="/">TOP</Link>
      </div>
      <div>
        <Link to="/blogs">記事一覧画面</Link>
      </div>
      <h2>タイトルを入力してください</h2>
      <div>
        <input
          value={title}
          onChange={(element) => setTitle(element.target.value)}
          style={{ width: "500px", height: "300px" }}
        />
      </div>
      <h2>本文を入力してください</h2>
      <div>
        <textarea
          value={contents}
          onChange={(element) => setContents(element.target.value)}
          style={{ width: "500px", height: "300px" }}
        />
      </div>
    </div>
  );
}

export default CreateBlog;
