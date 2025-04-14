import React from "react";
import { Form, useLoaderData } from "react-router";

import type { Route } from "./+types/search";
function search({ loaderData }: Route.ComponentProps) {
  const { result } = loaderData;
  return (
    <div>
      <Form method="get" action="/search">
        <input type="text" name="q" />
        <button type="submit">Search</button>
        result:{result}
      </Form>
    </div>
  );
}

export default search;
