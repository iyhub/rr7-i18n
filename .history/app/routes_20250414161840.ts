import {
  type RouteConfig,
  index,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  route("api/locales/:lng/:ns", "routes/locales.ts"),
  route("hello", "routes/hello.tsx"),
  route("api/foo", "routes/api/foo.ts"),
  // route(":lng?/search", "routes/search.tsx"),
  // route(":lng?", "routes/home.tsx"),

  ...prefix(":lng?", [
    index("routes/home.tsx"),
    route("search", "routes/search.tsx"),
  ]),
] satisfies RouteConfig;
