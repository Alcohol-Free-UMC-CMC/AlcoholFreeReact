import axios from "axios";

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // 기본 서버 주소 입력
  timeout: JSON.parse(process.env.REACT_APP_AXIOS_TIMEOUT),
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

export { customAxios };

