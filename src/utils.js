// export const getImageUrl = (path) => {
//     console.log("PATH", path)
//     return new URL(`/assets/${path}`, import.meta.url).href;
// };

export const getImageUrl = (path) => `/assets/${path}`;