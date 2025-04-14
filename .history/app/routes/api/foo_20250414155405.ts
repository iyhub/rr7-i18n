import type { LoaderFunctionArgs, ActionFunctionArgs } from "react-router";

// 对应get请求
export async function loader({ request }: LoaderFunctionArgs) {
  return { foo: "bar" };
}
// 对应post请求
export async function action({ request }: ActionFunctionArgs) {}
