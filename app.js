// app.js
import renderHome from "./components/Home.js";
import renderAbout from "./components/About.js";

function renderNotFound() {
  const appEl = document.getElementById("app");
  appEl.innerHTML = "<h1>404 - Not found</h1>";
}

// # Router
function router() {
  const routes = [
    { path: "", component: renderHome },
    { path: "about", component: renderAbout },
  ];
  const hash = window.location.hash.substr(1);
  const route = routes.find((r) => r.path === hash) || {
    component: renderNotFound,
  };
  route.component();
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
