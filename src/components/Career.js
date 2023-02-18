export default function CareerComponent(careers) {
  let contents = "";
  if (Array.isArray(careers) && careers.length !== 0) {
    contents += `<ul>`;

    careers.forEach((career) => {
      const doList = career.doList;
      let doContents = ``;
      if (Array.isArray(doList) && doList.length !== 0) {
        doContents += `<ul>`;
        doList.forEach((e) => {
          doContents += `<li>${e}</li>`;
        });
        doContents += `</ul>`;
      }

      contents += `<li>
        <h4>${career.name}</h4>
        <p>${career.site}</p>
            <p>${career.period}</p>
            ${doContents}
        </li>`;
    });
    contents += `</ul>`;
  }
  return contents;
}
