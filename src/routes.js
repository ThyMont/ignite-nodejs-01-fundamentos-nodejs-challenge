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
];

export { routes };
