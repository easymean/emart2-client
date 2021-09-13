import { SERVER } from "@/asset/constant";

const endpoints = {
  API_BASE_URL: `http://${SERVER.LOCAL}/api/v1`,
  CATEGORY_API: "/categories",
  SITE_API: "/websites",
  ACCOUNT_API: "/account",
  AUTH_API: "/auth",
  MANAGE_SITE_API: "/admin/websites",
  MANAGE_CATEGORY_API: "/admin/categories",
  USER_API: "/user",
};

export default endpoints;
