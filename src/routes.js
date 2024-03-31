import controller from "./controller.js";

const routes = [
  {
    method: "POST",
    path: "/tasks",
    handler: controller.insertTask,
  },
];

export { routes };
