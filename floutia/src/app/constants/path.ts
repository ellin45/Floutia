export const BASE_API_URL = "https://api.spotify.com";
export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://floutia.vercel.app"
    : "http://localhost:3000";
