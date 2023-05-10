import { Link } from "react-router-dom";

function App() {
  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      <h1>ブログアプリ</h1>
      <div>
        <Link to="/create">記事作成画面</Link>
      </div>
      <div>
        <Link to="/blogs">記事一覧画面</Link>
      </div>
    </div>
  );
}

export default App;
