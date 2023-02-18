export default function CareerComponent(educations) {
  let contents = "";
  if (Array.isArray(educations) && educations.length !== 0) {
    contents += `<ul>`;
    educations.forEach((career) => {
      contents += `<li>
        <h4>${career.name}</h4>
        <p>${career.site}</p>
            <p>${career.period}</p>
        </li>`;
    });
    contents += `</ul>`;
  }
  return contents;
}
