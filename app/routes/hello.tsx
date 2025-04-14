import { useLoaderData } from "react-router";
import type { Route } from "./+types/hello";
export async function loader({ context }: Route.LoaderArgs) {
  const data = { foo: "bar" };
  return { data };
}

export default function HelloPage() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Hello:{data.foo}</h1>
    </div>
  );
}
