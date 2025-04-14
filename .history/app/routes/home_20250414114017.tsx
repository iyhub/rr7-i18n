import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { getLocale } from "@/middleware/i18next";
import { useLoaderData } from "react-router";

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
  return {
    date: date,
    title: i18next.t("title"),
    description: i18next.t("description"),
  };
}

export default function Home() {
  const { date } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Home</h1>
      <p>Date: {date}</p>
    </div>
  );
}
