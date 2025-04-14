import type { LoaderFunctionArgs, ActionFunctionArgs } from "react-router";

// 对应get请求
export async function loader({ request }: LoaderFunctionArgs) {
  // 获取请求参数...

  // 查询数据

  // 组织数据

  // 返回响应
  return { foo: "bar" };
}
// 对应post请求
export async function action({ request }: ActionFunctionArgs) {
  // 获取请求体...

  // 处理业务逻辑...

  // 返回响应
  return { foo: "bar" };
}
