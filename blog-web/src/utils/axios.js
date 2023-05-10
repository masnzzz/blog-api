import axios from "axios";

// axiosのインスタンスを作成
export const axiosInstance = axios.create();
// baseURLのデフォルト設定にREACT_APP_API_DOMEINを指定する
axiosInstance.defaults.baseURL = process.env.REACT_APP_API_DOMEIN;
