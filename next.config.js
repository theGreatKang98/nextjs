// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
  
// }
const API_KEY = process.env.API_KEY;
export const reactStrictMode = true;
export async function rewrites() {
  return [
    {
      source: "/api/movies",
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      // permanent: false,
    },
    // {
    //   source: "/api/movies/:id",
    //   destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
    // }
  ];
}
