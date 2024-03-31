import controller from "./controller.js";

const routes = [
  {
    method: "POST",
    path: "/tasks",
    handler: controller.insertTask,
  },
  {
    method: "GET",
    path: "/tasks",
    handler: controller.listTasks,
  },
  {
    method: "PUT",
    path: "/tasks/:id",
    handler: controller.listTasks,
  },
  {
    method: "DELETE",
    path: "/tasks/:id",
    handler: controller.listTasks,
  },
  {
    method: "PATCH",
    path: "/tasks/:id/complete",
    handler: controller.listTasks,
  },
];

export { routes };
