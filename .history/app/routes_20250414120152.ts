import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route(":lng", "routes/home.tsx", {
    children: [route("api/locales/:lng/:ns", "routes/locales.ts")],
  }),
] satisfies RouteConfig;
