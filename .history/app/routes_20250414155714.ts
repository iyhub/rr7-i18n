import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route(":lng?", "routes/home.tsx"),
  route("api/locales/:lng/:ns", "routes/locales.ts"),
  route("hello", "routes/hello.tsx"),
  route("api/foo", "routes/api/foo.ts"),
  route("search", "routes/search.tsx"),
] satisfies RouteConfig;
