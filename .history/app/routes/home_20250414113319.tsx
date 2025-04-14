import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { getLocale } from "~/middleware/i18next";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {
  let locale = getLocale(context);
  let date = new Date().toLocaleDateString(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return { date };
}

export default function Home() {
  return <Welcome />;
}
