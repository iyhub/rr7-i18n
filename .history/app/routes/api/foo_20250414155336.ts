import type { LoaderFunctionArgs, ActionFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  return { foo: "bar" };
}

export async function action({ request }: ActionFunctionArgs) {