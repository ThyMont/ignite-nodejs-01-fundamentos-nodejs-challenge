import controller from "./controller.js";
import { buildRoutePath } from "./utils/buildRoutePath.js";

const routes = [
  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: controller.insertTask,
  },
  {
    method: "GET",
    path: buildRoutePath("/tasks"),
    handler: controller.listTasks,
  },
  {
    method: "GET",
    path: buildRoutePath("/tasks/:id"),
    handler: controller.findTaskById,
  },
  {
    method: "PUT",
    path: buildRoutePath("/tasks/:id"),
    handler: controller.updateTask,
  },
  {
    method: "DELETE",
    path: buildRoutePath("/tasks/:id"),
    handler: controller.listTasks,
  },
  {
    method: "PATCH",
    path: buildRoutePath("/tasks/:id/complete"),
    handler: controller.listTasks,
  },
];

export { routes };
