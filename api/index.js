import { fetchGet, fetchPost, fetchPut } from "./utils";

const API_BASE_URL = "https://sistech-api.vercel.app";

export async function getListAllBlog() {
  return fetchGet(`${API_BASE_URL}/blog`);
}

export async function createBlog(payload) {
  const res = await fetchPost(`${API_BASE_URL}/blog/`, payload);
  return res;
}

export async function editBlog(payload) {
  const res = await fetchPut(`${API_BASE_URL}/blog/`, payload);
  return res;
}

export async function likeBlog(id) {
  return fetchPost(`${API_BASE_URL}/blog/like/`, { id });
}
