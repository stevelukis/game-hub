import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6f93564c8af04537aacb04f001443520",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}