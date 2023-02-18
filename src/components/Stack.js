export default function StackComponent(stacks) {
  let contents = "";
  if (Array.isArray(stacks) && stacks.length !== 0) {
    contents += `<ul>`;
    stacks.forEach((stack) => {
      contents += `<li>
            <h4>${stack.name}</h4>
            <p>level : ${stack.level}</p>
            <p>${stack.description}</p>
        </li>`;
    });
    contents += `</ul>`;
  }

  return contents;
}
