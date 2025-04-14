import React from "react";
import { Form } from "react-router";
function search() {
  return (
    <div>
      <Form>
        <input type="text" name="q" />
        <button type="submit">Search</button>
      </Form>
    </div>
  );
}

export default search;
