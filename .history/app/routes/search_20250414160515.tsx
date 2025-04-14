import React from "react";
import { Form, useFetcher, useLoaderData } from "react-router";

import type { Route } from "./+types/search";

function Search({ loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher();
  return (
    <div>
      <fetcher.Form method="get" action="/api/foo">
        <input
          type="text"
          name="q"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Search
        </button>
        Query Result Foo={fetcher.data?.foo}
      </fetcher.Form>
    </div>
  );
}

export default Search;
