import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { axiosInstance } from "../utils/axios";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const navigate = useNavigate();

  const onClick = async () => {
    await axiosInstance.post("/blogs", { title, contents });
    navigate("/blogs", { replace: true });
  };

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
          style={{ width: "500px" }}
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

      <div style={{ marginTop: "20px" }}>
        <button onClick={onClick}>記事を作成する</button>
      </div>
    </div>
  );
}

export default CreateBlog;
