import { createRoutes } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

export const routes = createRoutes([
  {
    path: "/:lang",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  // 重定向根路径到默认语言
  {
    path: "/",
    loader: ({ request }) => {
      const url = new URL(request.url);
      return new Response(null, {
        status: 302,
        headers: {
          Location: `/en${url.pathname === "/" ? "" : url.pathname}`,
        },
      });
    },
  },
]);
