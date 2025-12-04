


import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [

  index("routes/home.tsx"),
  route("/contenu","routes/contenuAPI.tsx")  
] satisfies RouteConfig;