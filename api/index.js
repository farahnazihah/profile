import { fetchGet } from "./utils";

const API_BASE_URL = process.env.API_BASE_URL;

export async function getListAllBlog() {
  return fetchGet(`${API_BASE_URL}/blog`);
}
