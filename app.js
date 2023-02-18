// app.js
import HomeComponent from "./src/views/Home.js";
import AboutComponent from "./src/views/About.js";
import PostComponent from "./src/views/Post.js";
import renderHeader from "./src/layouts/Header.js";
import renderFooter from "./src/layouts/Footer.js";

function renderNotFound() {
  return "<h1>404 - Not found</h1>";
}

// # Router
function router() {
  const appEl = document.getElementById("app");
  appEl.innerHTML = "";

  const routes = [
    { path: "", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "post", component: PostComponent },
  ];
  const hash = window.location.hash.substr(1);
  const route = routes.find((r) => r.path === hash) || {
    component: renderNotFound,
  };

  if (route.component !== renderNotFound) {
    renderHeader(routes);
  }
  appEl.innerHTML += route.component();
  if (route.component !== renderNotFound) {
    renderFooter();
  }
}

// ## Router load
window.addEventListener("load", () => {
  router();
  window.addEventListener("hashchange", router);
});
// 뒤로가기
window.addEventListener("popstate", () => {
  router();
  window.addEventListener("hashchange", router);
});
