import React from "react";
import { Form, useFetcher, useLoaderData } from "react-router";

import type { Route } from "./+types/search";

function Search() {
  const fetcher = useFetcher();
  return (
    <div>
      <img src="/favicon.ico" alt="logo" />
      <img src="/images/icon.jpeg" alt="logo" className="w-20 h-20" />
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
