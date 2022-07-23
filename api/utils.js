const API_KEY = process.env.API_KEY;

export async function fetchGet(url) {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer c3b0f1cc-5735-4028-848b-6e5eb62ca37f`,
    },
  });
  return res.json();
}
