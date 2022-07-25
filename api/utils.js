import Cookies from "js-cookie";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function fetchGet(url) {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return res.json();
}

export async function fetchPost(url, payload) {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  return res;
}
