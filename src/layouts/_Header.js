export default function renderHeader(routes) {
  const appEl = document.getElementById("app");
  // const list = document.createElement("ul");
  // routes.array.forEach((r) => {
  //   const li = document.createElement("li");
  //   const a = document.createElement("a");
  //   a.href = `#${r.path}`;
  //   a.innerText = r.path;
  //   li.appendChild(a);
  //   list.appendChild(li);
  // });

  let ul = `<ul>`;
  routes.forEach((e) => {
    const path = e.path;
    ul += `<li><a href='#${path}'>${path === "" ? "home" : path}</a></li>`;
  });
  ul += `</ul>`;

  appEl.innerHTML += `
    <header>
      <nav>
        ${ul}
      </nav>
    </header>
  `;
  // appEl.innerHTML = `
  //   <header>
  //     <nav>
  //       <ul>
  //         <li><a href="/">home</a></li>
  //         <li><a href="#about">about</a></li>
  //         <li><a href="#post">post</a></li>
  //       </ul>
  //     </nav>
  //   </header>
  // `;
}
