import { fetchGet, fetchPost } from "./utils";

const API_BASE_URL = "https://sistech-api.vercel.app";
const API_KEY = process.env.API_KEY;

export async function getListAllBlog() {
  return fetchGet(`${API_BASE_URL}/blog`);
}

export async function createBlog(payload) {
  console.log(payload);
  const res = await fetchPost(`${API_BASE_URL}/blog`, payload);
  console.log(res);
  return res;
}
export async function likeBlog(id) {
  return fetchPost(`${API_BASE_URL}/blog/like`, { id });
}
