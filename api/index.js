import { fetchGet, fetchPost } from "./utils";

const API_BASE_URL = "https://sistech-api.vercel.app";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function getListAllBlog() {
  return fetchGet(`${API_BASE_URL}/blog`);
}

export async function createBlog(payload) {
  const res = await fetchPost(`${API_BASE_URL}/blog/`, payload);
  return res;
}
export async function likeBlog(id) {
  return fetchPost(`${API_BASE_URL}/blog/like/`, { id });
}
