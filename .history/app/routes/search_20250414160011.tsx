import React from "react";
import { Form, useFetcher, useLoaderData } from "react-router";

import type { Route } from "./+types/search";

function search({ loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher();
  return (
    <div>
      <Form method="get" action="/search">
        <input type="text" name="q" />
        <button type="submit">Search</button>
        Query Result:{fetcher.data?.foo}
      </Form>
    </div>
  );
}

export default search;
