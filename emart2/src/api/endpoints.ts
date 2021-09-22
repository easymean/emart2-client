import { SERVER } from "@/asset/constant";

const endpoints = {
  API_BASE_URL: `http://${SERVER.LOCAL}/api/v1`,
  ADMIN_BASE_URL: `http://${SERVER.LOCAL}/admin/v1`,
  CATEGORY_API: "/categories",
  SITE_API: "/websites",
  ACCOUNT_API: "/account",
  AUTH_API: "/auth",
  MANAGE_SITE_API: "/websites",
  MANAGE_CATEGORY_API: "/categories",
  MY_INFO_API: "/my",
};

export default endpoints;
