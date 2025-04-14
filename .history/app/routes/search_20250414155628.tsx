import React from "react";
import { Form, useLoaderData } from "react-router";
function search() {
  const result = useLoaderData<typeof loader>();
  return (
    <div>
      <Form method="get">
        <input type="text" name="q" />
        <button type="submit">Search</button>
        result:{result}
      </Form>
    </div>
  );
}

export default search;
