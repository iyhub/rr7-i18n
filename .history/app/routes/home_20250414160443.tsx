import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { getLocale, getInstance } from "@/middleware/i18next";
import { useLoaderData } from "react-router";
import { Form } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router V7 I18n APP" },
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

  let currency = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "CNY",
  });

  const money = currency.format(1000);

  let i18next = getInstance(context);
  console.log("locale:", locale);
  // console.log("i18next:", i18next);

  return {
    date: date,
    title: i18next.t("title"),
    description: i18next.t("description"),
    money: money,
  };
}

export default function Home() {
  const { date, title, description, money } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1 className="text-2xl font-bold">多语言的PDF Tools</h1>
      <p>Date: {date}</p>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Money: {money}</p>

      <Form method="post">
        <input
          type="text"
          name="foo"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </Form>
    </div>
  );
}
