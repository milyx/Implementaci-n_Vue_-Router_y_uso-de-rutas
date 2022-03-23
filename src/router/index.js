import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "portada",
    component: () =>
      import(/* webpackChunkName: "portadaView" */ "../views/PortadaView.vue"),
  },
  {
    path: "/sobremi",
    name: "sobremi",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sobremi" */ "../views/SobreMiView.vue"),
  },
  {
    path: "/contacto",
    name: "contacto",
    component: () =>
      import(/* webpackChunkName: "contacto" */ "../views/ContactoView.vue"),
  },
  {
    path: "/ultimopost",
    name: "ultimopost",
    component: () =>
      import(/* webpackChunkName: "ultimopost" */ "../views/UltimoPostView.vue"),
      children: [
        {
          path: ':id',
          name: 'detalle',
          component: () =>
      import(/* webpackChunkName: "detalle" */ "../views/UltimoPostDetalleView.vue"),

        }
      
      ]
  },
  {
    path: "*",
    name: "rutasinexistentes",
    component: () =>
      import(/* webpackChunkName: "rutasinexistentes" */ "../views/RutasInexistentesView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
