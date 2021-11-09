import { SERVER } from "@/asset/constant";

const endpoints = {
  BASE_URL: `http://${SERVER.LOCAL}/admin/v1`,
  CATEGORY_API: "/categories",
  SITE_API: "/websites",
  ACCOUNT_API: "/accounts",
  AUTH_API: "/auth",
  MY_INFO_API: "/my",
};

export default endpoints;
