import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

export default [
  // 处理带语言前缀的路由
  route(":lang", "routes/_lang.tsx"),
  // 处理根路径重定向
  {
    path: "/",
    loader: ({ request }: { request: Request }) => {
      const url = new URL(request.url);
      return new Response(null, {
        status: 302,
        headers: {
          Location: `/en${url.pathname === "/" ? "" : url.pathname}`,
        },
      });
    },
  },
] satisfies RouteConfig;
