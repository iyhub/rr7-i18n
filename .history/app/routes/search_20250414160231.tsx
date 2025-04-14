import React from "react";
import { Form, useFetcher, useLoaderData } from "react-router";

import type { Route } from "./+types/search";

function search({ loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher();
  return (
    <div>
      <fetcher.Form method="get" action="/api/foo">
        <input type="text" name="q" />
        <button type="submit">Search</button>
        Query Result Foo={fetcher.data?.foo}
      </fetcher.Form>
    </div>
  );
}

export default search;
