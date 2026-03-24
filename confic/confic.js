const sanitizeValue = (value = "") => value.replace(/[`'"]/g, "").trim();

const baseUrl = sanitizeValue(import.meta.env.VITE_BASE_URL).replace(
  /\/+$/,
  "",
);
const apiVersion = sanitizeValue(
  import.meta.env.VITE_API_VERSION || import.meta.env.VITE_API_VIRSION || "v1",
).replace(/^\/+/, "");

export const API_CONFIG = {
  baseUrl,
  apiVersion,
  apiBaseUrl: `${baseUrl}/api/${apiVersion}`,
};

// export const API_CONFIG = {
//   baseURL: `${import.meta.env.VITE_BASE_URL}/api/${
//     import.meta.env.VITE_API_VIRSION
//   }`,
// };
